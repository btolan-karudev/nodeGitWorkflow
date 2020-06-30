var fs = require('fs');
fs.writeFile(__dirname + "/index.html", "<h1>HTML is the base of the web</h1>", function (error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Bravo");
    }
});