#!/usr/bin/node
const process = 5;
if (process === undefined || isNaN(process)) {
  console.log('Missing number of occurences');
} else {
    const x = Number(process);
      for (i = 0; i < x; i++) {
        console.log('C is fun');
 }
}
