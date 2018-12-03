console.log("Ready!");

// 1. isPrime - Returns true or false, indicating whether the given number is prime.

function isPrime (x) {

    for (var i = 1; i<= x; i++) {
      if ( x % i !== 0 ) {
        console.log("true")
      } else {
        console.log("false")
      }

    }

}

// console.log(isPrime (100000000));