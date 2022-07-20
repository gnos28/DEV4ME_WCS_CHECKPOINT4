const models = require("../models");

class TagRealManager {
  static browse = (req, res) => {
    models.tag_real
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static read = (req, res) => {
    models.tag_real
      .find(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const newTagReal = req.body;

    const validationErrors = models.tag_real.validate(newTagReal);
    if (validationErrors) {
      console.error(validationErrors);
      return res.status(422).json({ validationErrors });
    }

    models.tag_real
      .insert(newTagReal)
      .then(([result]) => {
        res.status(201).send({ ...newTagReal, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    return true;
  };

  static modify = async (req, res) => {
    const newTagReal = req.body;

    const validationErrors = models.tag_real.validate(newTagReal, false);
    if (validationErrors) res.status(422).json({ validationErrors });
    else {
      models.tag_real
        .update(newTagReal, req.params.id)
        .then(([result]) => {
          if (result.affectedRows === 0) throw new Error("no change affected");
          res.status(201).send({ ...newTagReal });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    }
  };

  static delete = async (req, res) => {
    models.tag_real
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

module.exports = TagRealManager;
