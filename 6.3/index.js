// 1. isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime (x) {
  var result;

  for (var i = 0, y = 1; i <= x ; i++, y++) {

    result = x / y;
    if ( x == 0 || x == 1 ) {
      return false;
    } else if (result !== x && result !==1 && Number.isInteger(result) === true) {
      return false;
    } else if ( y === x ) {
      return true
    }

  }

}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(17));
console.log(isPrime(10000000000000));


// 2. factorial - Returns a number that is the factorial of the given number.
function factorial(x) {
  if ( x !== 1 ) {
    return x * factorial(x - 1);
  } else {
    return x;
  }
}

factorial(6);


// 3. fib - Returns the nth Fibonacci number.
function fib(x) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= x; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

fib(20);

// 4. isSorted - Returns true or false, indicating whether the given array of numbers is sorted.

var array1 = [];
var array2 = [-Infinity, -5, 0, 3, 9];
var array3 = [3, 9, -3, 10];

function isSorted(arr){
  var boolean;

  if (arr.length !== 0) {

    for(var i = 0; i < arr.length - 1; i ++){

      if ( arr[i] < arr[i+1] ) {
        boolean = true;
      } else {
        boolean = false;
        return boolean;
      }

    }

  } else {
    boolean = true;
  }

  return boolean;

}
isSorted(array1);
isSorted(array2);
isSorted(array3);



