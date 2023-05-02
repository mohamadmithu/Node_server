const fs = require("fs");
const http = require("http");

let server = http.createServer(function (req, res) {
	if (req.url == "/") {
		let file = fs.readFileSync(__dirname + "/public/homsite.html");
		res.end(file);
	} else if (req.url == "/work") {
		let file = fs.readFileSync(__dirname + "/public/worksite.html");
		res.end(file);
	} else if (req.url == "/contact") {
		let file = fs.readFileSync(__dirname + "/public/contactsite.html");
		res.end(file);
	} else if (req.url == "/styles.css") {
		let file = fs.readFileSync(__dirname + "/public/styles.css");
		res.end(file);
	} else if (req.url == "/index.js") {
		let file = fs.readFileSync(__dirname + "/public/index.js");
		res.end(file);
	} else {
		res.statusCode = 404;
		res.end("404 Not Found!");
	}
});

server.listen(3000, function () {
	console.log("Served on port: 3000");
});
