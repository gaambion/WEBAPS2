let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let router = require('./router.js');
let app = express();
const PORT = 3000;


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './client', 'journal.html'));
});

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
