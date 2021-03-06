require('dotenv').config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");
const bodyParser = require("body-parser");

let app = express();

//config body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

//config web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Messenger tech shop is running at the port ${port}`);
});
