var concat = require('concat-stream');
//var through = require('through2');
//var stream = through(write,end);
//
//function write(buffer, encoding, next) {
//    this.push(
//        buffer.toString()
//    )
//    next();
//}
//
//function end (done) {
//    done();
//} not streaming anything, only one input on process.stdin

process.stdin.pipe(concat(function(data) {
    var s = data.toString().split('').reverse().join('');
    console.log(s);
})
) // attempt to use process.stdout yields "Pipe not readable". possibly
//because stream does not use return call. can use console.log for others?
//no, need to get full stream before pipe to stdout, so use stream and pipe again
//for single chunk, no need to pipe again. simply return console.log