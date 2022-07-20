const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  validate(data, forCreation = true) {
    this.presence = forCreation ? "required" : "optional";

    const joiObject = {
      name: Joi.string().max(80).presence(this.presence),
      email: Joi.string().email().min(5).max(50).presence(this.presence),
      phone_number: Joi.string().max(20).presence(this.presence),
      is_plant_admin: Joi.bool().presence(this.presence),
      is_super_admin: Joi.bool().presence(this.presence),
      plant_id: Joi.number().presence(this.presence),
    };

    if (forCreation)
      joiObject.password = Joi.string().max(255).presence(this.presence);
    else
      joiObject.password_hash = Joi.string().max(255).presence(this.presence);

    return Joi.object(joiObject).validate(data, { abortEarly: false }).error;
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (name, email, password_hash, phone_number, is_plant_admin, plant_id, is_super_admin) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.name,
        user.email,
        user.password_hash,
        user.phone_number,
        user.is_plant_admin,
        user.plant_id,
        user.is_super_admin,
      ]
    );
  }

  update(user, id) {
    return this.connection.query(
      `update ${UserManager.table} set ? where id = ?`,
      [user, id]
    );
  }

  findByUserEmail(email) {
    return this.connection
      .query(`select * from  ${this.table} where email = ?`, [email])
      .then((result) => result[0]);
  }

  findByUserId(user, id) {
    return this.connection.query(`select * from  ${this.table} where id = ?`, [
      user,
      id,
    ]);
  }

  findByPlantId(plantId) {
    return this.connection.query(
      `select * from  ${this.table} where plant_id = ?`,
      [plantId]
    );
  }
}

module.exports = UserManager;
