#!/usr/bin/env node

var fs = require('fs');

fs.readdir(process.cwd(), function(err, files) {
  if (err) throw err;

  if (process.argv[2] === '-ex') {
    if (process.argv.length < 4) {
      console.log('Usage: node ls.js -ex file-type');
      return;
    }
    var ext = process.argv[3];

    files.forEach(function(file) {
      var fileExt = file.split('.')[1];
      if (ext === fileExt) {
        process.stdout.write(file + ' ');
      }
    });
  }
  else {
    files.forEach(function(file) {
      process.stdout.write(file + ' ');
    });
  }
  process.stdout.write('\n');
});
