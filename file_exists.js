util = require('util');
fs = require('fs');
fs.exists('file_exists.js', fileExists );
fs.exists('file_exists2.js', fileExists );
fs.stat('01 White flag descomprimido.mp3', fileStat);

function fileExists (exists) {
  console.log( (exists ? "Path Exists" : "Path Does Not Exist"));
}

function fileStat (error, stats) {
  console.log('error:'+error);
  console.log('Is a file:',stats.isFile()); 
  console.log('Is a directory:',stats.isDirectory());
  console.log('Is a socket:',stats.isSocket());
  console.log('Device ID:',stats.dev);
  console.log('access mode of the file:',stats.mode);
  console.log('Number of bytes in the file:',stats.size);
  console.log('Block size used to store the file:',stats.blksize);
  console.log('Number of blocks the file is taking on disk:',stats.blocks);
  console.log('Time the file was last accessed:',stats.atime);
  console.log('Time the file was last modified:',stats.mtime);
  console.log('Time the file was created:',stats.ctime);
  console.log('------');
  console.log(util.inspect(stats));
  
}

