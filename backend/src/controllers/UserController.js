const models = require("../models");
const { hashPassword } = require("../helpers/argonHelper");

class UserController {
  static browse = (req, res) => {
    // seul le super admin peut afficher tous les utilisateurs
    models.user
      .findAll()
      .then(([rows]) => {
        let answer;

        if (req.is_plant_admin)
          answer = rows.filter(
            (user) => user.plant_id === req.plant_id && !user.is_super_admin
          );
        else answer = rows.filter((user) => user.id === req.userId);

        if (req.is_super_admin) answer = rows;

        res.send(answer);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    // si je suis super_admin, j'affiche tous les utilisateurs que je souhaite suivant leur Id
    // si je suis admin, j'affiche un utilisateur qui dépend de ma plant
    // else if authorizedId = (req.is_plant_admin && req.params.id === req.plant_id) authorizedId = req.plant_id && req.params.id;
    // sinon j'affiche le compte utilisateur qui correspond au user_id de mon token
    // else authorizedId = req.user_id;

    models.user
      .find(req.params.id)
      .then(([rows]) => {
        let filteredAnswer;

        if (req.is_plant_admin)
          filteredAnswer = rows.filter(
            (user) => user.plant_id === req.plant_id
          );
        else filteredAnswer = rows.filter((user) => user.id === req.userId);

        if (req.is_super_admin) filteredAnswer = rows;

        if (!rows.length) res.sendStatus(404);

        if (rows.length && !filteredAnswer.length) res.sendStatus(403);

        if (rows.length && filteredAnswer.length) res.send(filteredAnswer);
      })

      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const newUser = req.body;
    let authorized = false;
    if (!newUser.plant_id) newUser.plant_id = req.plant_id;
    if (!newUser.is_plant_admin) newUser.is_plant_admin = false;

    if (!req.is_super_admin) {
      newUser.is_super_admin = false;

      if (req.is_plant_admin) {
        if (
          newUser.plant_id === req.plant_id &&
          !newUser.is_plant_admin &&
          !newUser.is_super_admin
        )
          authorized = true;
      }
    } else authorized = true;

    if (authorized) {
      const validationErrors = models.user.validate(newUser);
      if (validationErrors) {
        console.error(validationErrors);
        return res.status(422).json({ validationErrors });
      }
      // si je suis super admin, je peux créer n'importe quel compte utilisateur
      // si je suis admin, je ne peux pas créer de compte utlisateur pour une autre plant
      // que la mienne
      // si je suis un utilisateur lambda, pas d'accès à cette commande

      hashPassword(newUser.password).then((hash) => {
        delete newUser.password;

        models.user
          .insert({ ...newUser, password_hash: hash })
          .then(([result]) => {
            res.status(201).send({ ...newUser, id: result.insertId });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      });
    } else res.sendStatus(403);
    return true;
  };

  static modify = async (req, res) => {
    const newUser = req.body;
    let authorized = false;
    if (!newUser.plant_id) newUser.plant_id = req.plant_id;

    if (!req.is_super_admin) {
      const [userToModify] = await models.user.find(req.params.id);

      if (
        newUser.plant_id === req.plant_id &&
        !newUser.is_plant_admin &&
        !newUser.is_super_admin &&
        userToModify[0].plant_id === req.plant_id
      )
        authorized = true;

      if (parseInt(req.params.id, 10) !== req.userId && newUser.password)
        delete newUser.password;

      if (!req.is_plant_admin)
        if (parseInt(req.params.id, 10) !== req.userId) authorized = false;
    } else authorized = true;

    if (authorized) {
      if (newUser.password) {
        newUser.password_hash = await hashPassword(newUser.password);
        delete newUser.password;
      }
      const validationErrors = models.user.validate(newUser, false);
      if (validationErrors) res.status(422).json({ validationErrors });
      else {
        models.user
          .update(newUser, req.params.id)
          .then(([result]) => {
            if (result.affectedRows === 0)
              throw new Error("no change affected");
            delete newUser.password_hash;
            res.status(201).send({ ...newUser });
          })
          .catch((err) => {
            console.error(err);
            res.sendStatus(500);
          });
      }
    } else res.sendStatus(403);
  };

  static delete = async (req, res) => {
    let authorized = false;

    if (!req.is_super_admin) {
      const [userToModify] = await models.user.find(req.params.id);

      if (userToModify[0].plant_id === req.plant_id) authorized = true;
      if (parseInt(req.params.id, 10) === req.userId) authorized = false;

      if (!req.is_plant_admin) authorized = false;
    } else authorized = true;

    if (authorized) {
      models.user
        .delete(req.params.id)
        .then(() => {
          res.sendStatus(204);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } else res.sendStatus(403);
  };
}

module.exports = UserController;
