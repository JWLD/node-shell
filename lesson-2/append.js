var fs = require('fs');

if (process.argv.length < 5) {
  console.log('Usage: node path_to_read_file \'>>\' path_to_write_file');
  return;
}

var readStream = fs.createReadStream(process.argv[2]);
var writeStream = fs.createWriteStream(process.argv[4], { 'flags': 'a' });
readStream.pipe(writeStream);
