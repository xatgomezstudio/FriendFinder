// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// HTML GET Requests
// Below code handles when users "visit" a page.
// In each of the below cases the user is shown an HTML page of content
// ===========================================================
module.exports = function (app) {

    // GET Route to /survey which should display the survey page.
    // ===========================================================
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../publichome.html"));
    });

    //default, catch-all route that leads to home.html which displays the home page.
    // ===========================================================
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};
