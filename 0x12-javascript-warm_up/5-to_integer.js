#!/usr/bin/node
if (isNaN(process.argv[2]) || process.argv[2] === undefined) {
  console.log('Not a number')
} else {
  console.log('My first number:', parseInt(process.argv[2]));
}
