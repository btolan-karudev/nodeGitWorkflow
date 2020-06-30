var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is the base of the web</h1>", function (error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Bravo");
    }
});

var myPhotoLocation = 'https://boldoutline.in/wp-content/uploads/2019/08/Cover-69.jpg';

https.get(myPhotoLocation, function (response) {
    response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});