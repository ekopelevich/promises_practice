var fatch = require('./fetch');

var promise = fetch('./bears.txt');

promise.then( function(bears) {
  console.log(bears);
  return fetch('./fish.txt') {
}).then( function( fish ) {
    console.log( fish );
  });
}).catch( function( err ) {
  console.error( 'ERROR!', err );
});

console.log( 'test' );

document.body.style.backgroundColor = 'blue';
