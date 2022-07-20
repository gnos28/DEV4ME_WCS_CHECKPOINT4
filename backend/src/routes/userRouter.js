const express = require("express");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", auth, isAdmin, UserController.browse);
router.get("/:id", auth, isAdmin, UserController.read);
router.post("/", auth, isAdmin, UserController.add);
router.put("/:id", auth, isAdmin, UserController.modify);
router.delete("/:id", auth, isAdmin, UserController.delete);

module.exports = router;
