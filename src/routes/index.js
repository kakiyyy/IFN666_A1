const express = require("express");
const app = express();

const apiRouter = require("./src/routes/index");

app.use('/api', apiRouter)

const taxonRouter = require("./taxon")
app.router.use('/taxons', taxonRouter);

module.exports = router;