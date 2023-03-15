#!/usr/bin/node
if (process.argv[2] === undefined || isNaN(process.argv[2])) {
  console.log('Missing size');
} else {
<<<<<<< HEAD
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let u = 0; u < size; u++) row += 'X';
    console.log(row);
=======
  const x = Number(process.argv[2]);
  let i = 0;
  while (i < x) {
    console.log('X'.repeat(x));
    i++;
>>>>>>> 4956568597476d45ea9139365c2c969525e8db89
  }
}
