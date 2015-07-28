var through = require('through2');
var split = require('split');
var stream = through(write,end);
var i = 0;
//invalid solution as each chunk may have multiple lines, i.e. the first chunk
//function write (buffer, encoding, next) {
//    for (i=1; i<5; i++) {
//        if (i%2 == 0) {
//            this.push(buffer.toString().toLowerCase());
//            next(); //code
//        }
//        else {
//            this.push(buffer.toString().toUpperCase());
//            next();
//        }
//    }
//}

function write (buffer, encoding, next) {
        this.push(i % 2 == 0
            ? buffer.toString().toLowerCase() + '\n'
            : buffer.toString().toUpperCase() + '\n');
        i++
        next();
}

function end (done) {
    done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);