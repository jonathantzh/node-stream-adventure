var http = require('http');
var fs = require('fs');
var through = require('through2');

var server = http.createServer(function (req,res) {
    if (req.method != 'POST') {
    console.log('Send me a POST!');//code
    }
    
    req = through(write,end).pipe(res);;
    res.end('\n');

})

server.listen(process.argv[2]);

function write (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}

function end (done) {
    done();
}