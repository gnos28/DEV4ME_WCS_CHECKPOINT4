const express = require("express");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");
const TagRealController = require("../controllers/TagRealController");

const router = express.Router();

router.get("/", auth, isAdmin, TagRealController.browse);
router.get("/:id", auth, isAdmin, TagRealController.read);
router.post("/", auth, isAdmin, TagRealController.add);
router.put("/:id", auth, isAdmin, TagRealController.modify);
router.delete("/:id", auth, isAdmin, TagRealController.delete);

module.exports = router;
