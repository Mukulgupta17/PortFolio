const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 9001;
// const SignRouter = require("./Router/SignRouter");
const Signinrouter = require("./Router/Signinrouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
require("./Connection/Conndb");
app.use("/userssignin", Signinrouter);

app.listen(port, () => {
  console.log("server is listening at port port " + port);
});
