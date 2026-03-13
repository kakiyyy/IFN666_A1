const express = require("express");
const router = express.Router();

const taxonRouter = require("./taxon")

router.use('/taxons', taxonRouter);

module.exports = router;