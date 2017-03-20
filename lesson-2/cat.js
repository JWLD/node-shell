var fs = require('fs');

if (process.argv.length < 3) {
  console.log('Usage: node cat.js path_to_file');
  return;
}

var readStream = fs.createReadStream(process.argv[2]);
var fileContent = '';

readStream.on('error', function(err) {
  console.log(err);
  return;
});

readStream.on('data', function(chunk) {
  fileContent += chunk;
});

readStream.on('end', function() {
  process.stdout.write(fileContent);
});
