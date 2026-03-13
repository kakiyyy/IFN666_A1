const express = require("express");
const router = express.Router();

const controller = require("../controllers/taxon");

// get all (listing)
router.get("/", controller.getAll);

// get from id (listing)
router.get("/:id", controller.get);

// creating
router.post("/", controller.create);

// updating
router.put("/:id", controller.update);

// deleting
router.delete("/:id", controller.delete);

module.exports = router;