//Code to keep the bot running in the background on repl.it
//Keep onlly if you are using on repl.it otherwise delete:
//"const config = require('./alive.js');" on line "3" in the file "index.js"
//And delete this file

var http = require('http');
http.createServer(function (req, res) {
  res.write("Online");
  res.end();
}).listen(8080);
