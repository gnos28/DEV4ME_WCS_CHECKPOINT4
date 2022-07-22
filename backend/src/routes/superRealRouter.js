const express = require("express");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const SuperRealController = require("../controllers/SuperRealController");

const router = express.Router();

router.get("/", SuperRealController.browse);
router.get("/:id", SuperRealController.read);
router.post("/", auth, isAdmin, SuperRealController.add);
router.put("/:id", auth, isAdmin, SuperRealController.modify);
router.delete("/:id", auth, isAdmin, SuperRealController.delete);

module.exports = router;
