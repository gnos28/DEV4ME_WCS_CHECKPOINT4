const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

class MediaManager extends AbstractManager {
  static table = "media";

  validate(data, forCreation = true) {
    this.presence = forCreation ? "required" : "optional";

    const joiObject = {
      path: Joi.string().max(255).presence(this.presence),
      real_id: Joi.number().presence(this.presence),
    };

    return Joi.object(joiObject).validate(data, { abortEarly: false }).error;
  }

  insert(media) {
    return this.connection.query(
      `insert into \`${MediaManager.table}\` (path, real_id) values (?, ?)`,
      [media.path, media.real_id]
    );
  }

  update(media, id) {
    return this.connection.query(
      `update \`${MediaManager.table}\` set ? where id = ?`,
      [media, id]
    );
  }
}

module.exports = MediaManager;
