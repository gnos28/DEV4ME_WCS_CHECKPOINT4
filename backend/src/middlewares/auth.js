const { decodeJwt } = require("../helpers/jwtHelper");

const authorization = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const data = decodeJwt(token);
    req.userId = data.id;
    req.plant_id = data.plant_id;
    req.is_plant_admin = data.is_plant_admin;
    req.is_super_admin = data.is_super_admin;
    return next();
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = authorization;
