#!/usr/bin/env node

var fs = require('fs');

if (process.argv.length < 3) {
  console.log('Usage: node cat.js path_to_file');
  return;
}

fs.readFile(process.argv[2], function(err, file) {
  if (err) throw err;
  process.stdout.write(file);
});
