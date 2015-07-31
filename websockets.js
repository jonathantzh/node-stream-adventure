var ws = require('websocket-stream');
var stream = ws('ws://localhost:8099');
ws.write('hello\n')