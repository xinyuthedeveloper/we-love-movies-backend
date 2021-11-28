const router = require("express").Router({ mergeParams: true });
const MethodNotAllowed = require("../errors/MethodNotAllowed");
const controller = require("./theaters.controller");


router.route("/")
    .get(controller.list)
    .all(MethodNotAllowed);

module.exports = router;