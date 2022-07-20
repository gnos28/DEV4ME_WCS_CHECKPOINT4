const models = require("../models");

class MediaManager {
  static browse = (req, res) => {
    models.media
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
    models.media
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
    const newMedia = req.body;

    const validationErrors = models.media.validate(newMedia);
    if (validationErrors) {
      console.error(validationErrors);
      return res.status(422).json({ validationErrors });
    }

    models.media
      .insert(newMedia)
      .then(([result]) => {
        res.status(201).send({ ...newMedia, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
    return true;
  };

  static modify = async (req, res) => {
    const newMedia = req.body;

    const validationErrors = models.media.validate(newMedia, false);
    if (validationErrors) res.status(422).json({ validationErrors });
    else {
      models.media
        .update(newMedia, req.params.id)
        .then(([result]) => {
          if (result.affectedRows === 0) throw new Error("no change affected");
          res.status(201).send({ ...newMedia });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    }
  };

  static delete = async (req, res) => {
    models.media
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

module.exports = MediaManager;
