const express = require("express");
const router = express.Router();

const controller = require("../controllers/taxon");

// list all taxons
router.get("/", controller.list);

// get a single taxon
router.get("/:id", controller.get);

// create a new taxon
router.post("/", controller.create);

// update an existing taxon
router.put("/:id", controller.update);

// delete a taxon
router.delete("/:id", controller.delete);

module.exports = router;