var fatch = require('./fetch');

var promise = fetch('bears.txt');

promise.then( function(bears) {
  console.log(bears);
  return fetch('fish.txt');
}).then( function( fish ) {
    console.log( fish );
}).catch( function( err ) {
  console.error( 'ERROR!', err );
});

console.log( 'test' );

document.body.style.backgroundColor = 'blue';

// Promise.all([
//   fetch('bears.txt'),
//   fetch('fish.txt')
// ]).then( function ( values ) {
//   var bears = values[0];
//   var fish = values[1];
//   console.log( bears, fish );
// });

// var promise = new Promise( function ( resolve, reject ) {
//   reject(new Error('another error'));
//   resolve('All good');
// });
//
// promise.then( function ( result ) {
//   console.log('Was it good?', result );
// }).catch( function( err ) {
//   console.log('ERR', err);
// });
