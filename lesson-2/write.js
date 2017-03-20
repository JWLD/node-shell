var fs = require('fs');
var data = 'Simply Easy Learning';

// create a variable stream
var writeStream = fs.createWriteStream('output.txt');

// write the data to stream with encoding to be utf8
writeStream.write(data, 'UTF8');

// mark the end of file
writeStream.end();

// when the stream finishes log 'write completed'
writeStream.on('finish', function() {
  console.log('Write completed!');
});
