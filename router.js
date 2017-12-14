let express = require("express");
var jwt = require("jsonwebtoken");
let Journalctrl = require("./client/server/controller/journal.server.controller.js");
let Sessionctrl = require("./client/server/controller/session.server.controller.js");

let router = express.Router();

//authentication middleware
router.use(function(req, res, next) {
    var token = req.headers.authorization;

    if(!req.url.startsWith("/session"))
    {
        if(!token) {
            return res.status(401).send();
        } else {
            jwt.verify(token, "secret", function(error, decoded) {
                if(error) {
                    return res.status(401).send();
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        }
    } else {
        next();
    }
});

//authorization middleware
router.use(function(req, res, next) {
    if(!req.url.startsWith("/session")) {
        console.log(req.decoded);

        var access = req.decoded.access.split(",");

        if(req.url == "/journal" && access.includes("journal_view")) {
            next();
        } else {
            return res.status(401).send();
        }

    } else {
        next();
    }
});



router.get("/journal", Journalctrl.getAll);
router.post("/session", Sessionctrl.create);
router.post("/login", Sessionctrl.login);




module.exports = router;
