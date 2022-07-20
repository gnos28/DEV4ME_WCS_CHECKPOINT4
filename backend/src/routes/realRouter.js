const express = require("express");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const RealController = require("../controllers/RealController");

const router = express.Router();

router.get("/", auth, isAdmin, RealController.browse);
router.get("/:id", auth, isAdmin, RealController.read);
router.post("/", auth, isAdmin, RealController.add);
router.put("/:id", auth, isAdmin, RealController.modify);
router.delete("/:id", auth, isAdmin, RealController.delete);

module.exports = router;
