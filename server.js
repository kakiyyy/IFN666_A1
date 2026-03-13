const express = require("express");
//this is my code
const apiRouter = require("./src/routes/index");
const mediaTypeValidator = require("./src/middleware/mediaTypeValidator");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

// my code here
app.use(mediaTypeValidator);
app.use('/api', apiRouter);


app.get("/", (req, res) => {
  res.send("Hello, IFN666!");
});

app.listen(port, () => {
  console.log(`Server is listening on :${port}`)
});

module.exports = app;