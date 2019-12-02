var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res) {
    console.log('Request is ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/html'});
    if (req.url === '/cars') {
        console.log('came in cars');
        fs.readFile('./views/cars.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('file not found');
            } else {
                res.write(data);
            }
            res.end();
        });
        
        fs.readFile(imageDir + pic, function (err, content) {
            if (err) {
                res.writeHead(400, {'Content-type':'text/html'})
                console.log(err);
                res.end("No such image");    
            } else {
                //specify the content type in the response will be an image
                res.writeHead(200,{'Content-type':'image/jpg'});
                res.end(content);
            }
        });
    }
    else {
        if (req.url === 'cats') {
        }
    }



});
server.listen(7077, function() {
    
});