const isAdmin = (req, res, next) => {
  if (req.is_admin) return next();

  return res.sendStatus(401);
};

module.exports = isAdmin;
