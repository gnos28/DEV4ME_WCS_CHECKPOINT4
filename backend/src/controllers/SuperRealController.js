const models = require("../models");

class SuperRealManager {
  static browse = async (req, res) => {
    try {
      const [reals] = await models.real.findAll();
      const [tags] = await models.tag.findAll();
      const [tagReals] = await models.tag_real.findAll();
      const [medias] = await models.media.findAll();

      const superReals = reals.map((real) => ({
        ...real,
        tags: tagReals
          .filter((tagreal) => tagreal.real_id === real.id)
          .map((tagreal) => tagreal.tag_id)
          .map(
            (tagId) =>
              tags
                .filter((tag) => tag.id === tagId)
                .map((tag) => ({
                  nom: tag.nom,
                  picture_path: tag.picture_path,
                }))[0]
          ),
        medias: medias.filter((media) => media.real_id === real.id),
      }));

      res.send(superReals);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static read = async (req, res) => {
    try {
      const [reals] = await models.real.find(req.params.id);
      const [tags] = await models.tag.findAll();
      const [tagReals] = await models.tag_real.findAll();
      const [medias] = await models.media.findAll();

      const superReals = reals.map((real) => ({
        ...real,
        tags: tagReals
          .filter((tagreal) => tagreal.real_id === real.id)
          .map((tagreal) => tagreal.tag_id)
          .map(
            (tagId) =>
              tags
                .filter((tag) => tag.id === tagId)
                .map((tag) => ({
                  nom: tag.nom,
                  picture_path: tag.picture_path,
                }))[0]
          ),
        medias: medias.filter((media) => media.real_id === real.id),
      }));

      res.send(superReals);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static add = (req, res) => {
    const newReal = req.body;

    const validationErrors = models.real.validate(newReal);
    if (validationErrors) {
      console.error(validationErrors);
      return res.status(422).json({ validationErrors });
    }

    models.real
      .insert(newReal)
      .then(([result]) => {
        res.status(201).send({ ...newReal, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    return true;
  };

  static modify = async (req, res) => {
    const newReal = req.body;

    const validationErrors = models.real.validate(newReal, false);
    if (validationErrors) res.status(422).json({ validationErrors });
    else {
      models.real
        .update(newReal, req.params.id)
        .then(([result]) => {
          if (result.affectedRows === 0) throw new Error("no change affected");
          res.status(201).send({ ...newReal });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    }
  };

  static delete = async (req, res) => {
    models.real
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = SuperRealManager;
