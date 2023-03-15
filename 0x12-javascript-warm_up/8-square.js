#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for(let i = 0; i < size; i++) {
    let row = '';
    for(let u = 0; u < size; u++) row += 'X';
      console.log(row);
  }
}
