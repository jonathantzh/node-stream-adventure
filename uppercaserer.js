var through = require('through2');
var stream = through(write,end);

function write (buffer, encoding, next) {
    return buffer.setEncoding(encoding).toString();

}