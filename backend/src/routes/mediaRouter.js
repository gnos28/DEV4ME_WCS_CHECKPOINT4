const express = require("express");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const MediaController = require("../controllers/MediaController");

const router = express.Router();

router.get("/", auth, isAdmin, MediaController.browse);
router.get("/:id", auth, isAdmin, MediaController.read);
router.post("/", auth, isAdmin, MediaController.add);
router.put("/:id", auth, isAdmin, MediaController.modify);
router.delete("/:id", auth, isAdmin, MediaController.delete);

module.exports = router;
