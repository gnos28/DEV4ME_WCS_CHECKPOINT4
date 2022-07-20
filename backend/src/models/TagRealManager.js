const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

class TagRealManager extends AbstractManager {
  static table = "tag_real";

  validate(data, forCreation = true) {
    this.presence = forCreation ? "required" : "optional";

    const joiObject = {
      tag_id: Joi.number().presence(this.presence),
      real_id: Joi.number().presence(this.presence),
    };

    return Joi.object(joiObject).validate(data, { abortEarly: false }).error;
  }

  insert(tag) {
    return this.connection.query(
      `insert into \`${TagRealManager.table}\` (tag_id, real_id) values (?, ?)`,
      [tag.tag_id, tag.real_id]
    );
  }

  update(tag, id) {
    return this.connection.query(
      `update \`${TagRealManager.table}\` set ? where id = ?`,
      [tag, id]
    );
  }
}

module.exports = TagRealManager;
