let express = require("express"); // Web Framework

let index = require("./routes/index");

let app = express();

// Allow requests from all domains and localhost
app.all("/*", function (req, res, next) {
    // logger.log("info", `${req.method} ${req.url}`);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(express.static("./public")).use(index);

module.exports = app; // Needed for the tests
