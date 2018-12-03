console.log("Ready!");

// 1. isPrime - Returns true or false, indicating whether the given number is prime.

function isPrime (x) {
  var arr =[];
  var integerArray = [];

  for (var i = 0, y = 1; i <= x ; i++, y++) {

    arr[i] = x / y;

    if ( Number.isInteger(arr[i]) === true ) {
      integerArray.push(arr[i]);
    }

  }

  if ( 2 < integerArray.length ) {
    return false
  } else {
    return true
  }

}

// console.log(isPrime (100000000));