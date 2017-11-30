let express = require("express");
let ctrl = require("./client/server/controller/journal.server.controller.js");

let router = express.Router();

router.get("/journal", ctrl.getAll);
router.post("/journal", ctrl.create);

module.exports = router;
