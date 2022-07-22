const express = require("express");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const TagController = require("../controllers/TagController");

const router = express.Router();

router.get("/", TagController.browse);
router.get("/:id", auth, isAdmin, TagController.read);
router.post("/", auth, isAdmin, TagController.add);
router.put("/:id", auth, isAdmin, TagController.modify);
router.delete("/:id", auth, isAdmin, TagController.delete);

module.exports = router;
