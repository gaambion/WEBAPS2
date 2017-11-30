let express = require("express");
let bodyParser = require("body-parser");
let router = require('./router.js');
let app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/api", router);
app.use(express.static("client"));
app.use("*", (req, res) => {
    res.send("Resource not found (404).");
});

app.listen(PORT, () => {
    console.log(`[${PORT}] server started.`);
});
