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

  static add = async (req, res) => {
    try {
      const newReal = req.body;
      const newTags = req.body.tags;

      delete newReal.tags;
      const [result] = await models.real.insert(newReal);
      const [allTags] = await models.tag.findAll();

      const newTagsId = newTags
        .map((newTag) => newTag.nom)
        .map(
          (newTagName) => allTags.filter((tag) => tag.nom === newTagName)[0].id
        );

      newTagsId.map(async (tagId) =>
        models.tag_real.insert({
          tag_id: tagId,
          real_id: result.insertId,
        })
      );

      const validationErrors = models.real.validate(newReal);
      if (validationErrors) {
        console.error(validationErrors);
        return res.status(422).json({ validationErrors });
      }

      res.status(201).send({ ...newReal, id: result.insertId });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
    return false;
  };

  static modify = async (req, res) => {
    try {
      const newReal = req.body;
      const newTags = req.body.tags;

      delete newReal.tags;

      const [allTags] = await models.tag.findAll();
      const [tagReals] = await models.tag_real.findAll();

      const newTagsId = newTags
        .map((newTag) => newTag.nom)
        .map(
          (newTagName) => allTags.filter((tag) => tag.nom === newTagName)[0].id
        );

      // nouveaux tags
      newTagsId
        .filter(
          (tagId) =>
            tagReals.filter(
              (tr) =>
                tr.tag_id === tagId &&
                tr.real_id === parseInt(req.params.id, 10)
            ).length === 0
        )
        .map(async (tagId) =>
          models.tag_real.insert({
            tag_id: tagId,
            real_id: parseInt(req.params.id, 10),
          })
        );

      // tags effacés
      tagReals
        .filter((tr) => tr.real_id === parseInt(req.params.id, 10))
        .filter((tr) => !newTagsId.includes(tr.tag_id))
        .map(async (tr) => models.tag_real.delete(tr.id));

      const validationErrors = models.real.validate(newReal, false);
      if (validationErrors) res.status(422).json({ validationErrors });
      else {
        const [result] = await models.real.update(newReal, req.params.id);

        if (result.affectedRows === 0) throw new Error("no change affected");
        res.status(201).send({ ...newReal });
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  static delete = async (req, res) => {
    const [tagReals] = await models.tag_real.findAll();
    const [medias] = await models.media.findAll();

    await tagReals
      .filter((tr) => tr.real_id === parseInt(req.params.id, 10))
      .map(async (tr) => models.tag_real.delete(tr.id));

    await medias
      .filter((media) => media.real_id === parseInt(req.params.id, 10))
      .map(async (media) => models.media.delete(media.id));

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
