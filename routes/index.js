var express = require("express");
var router = express.Router();
var head = require("./components/head");
var body = require("./components/body");
var footer = require("./components/footer");

router.get("/", (req, res) => {
    var html = `
        ${head}
        ${body}       
        ${footer}
    `;

    res.send(html);
});

module.exports = router;
