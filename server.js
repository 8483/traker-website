const app = require("./app.js");

const PORT = process.env.PORT || 4999;

app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
});
