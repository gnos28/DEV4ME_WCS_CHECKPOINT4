const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

class TagManager extends AbstractManager {
  static table = "tag";

  validate(data, forCreation = true) {
    this.presence = forCreation ? "required" : "optional";

    const joiObject = {
      nom: Joi.string().max(64).presence(this.presence),
      picture_path: Joi.string().max(255).presence(this.presence),
    };

    return Joi.object(joiObject).validate(data, { abortEarly: false }).error;
  }

  insert(tag) {
    return this.connection.query(
      `insert into \`${TagManager.table}\` (nom, picture_path) values (?, ?)`,
      [tag.nom, tag.picture_path]
    );
  }

  update(tag, id) {
    return this.connection.query(
      `update \`${TagManager.table}\` set ? where id = ?`,
      [tag, id]
    );
  }
}

module.exports = TagManager;
