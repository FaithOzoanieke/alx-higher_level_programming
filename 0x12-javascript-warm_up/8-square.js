#!/usr/bin/node
const size = Math.floor(Number(process.argv[2]));
if (isNaN(size)) {
  console.log('Missing size');
} else {
  for (let u = 0; u < size; u++) {
    let row = '';
    for (let f = 0; f < size; f++) row += 'X';
    console.log(row);
  }
}
