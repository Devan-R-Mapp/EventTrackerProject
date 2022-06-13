/*
1: The following function (fahrToCels) should convert a Fahrenheit temperature
to Celsius. Complete the body of the function such that it will take a
 Fahrenheit parameter, and convert it into Celsius.
*/

function fahrToCels(fahr) {
  let cels;
  /*********Your Solution ********/

  /*******************************/
  return cels;
}

// These are printouts showing the value returned when the function is called
console.log(fahrToCels(212));
console.log(fahrToCels(32));
console.log(fahrToCels(0));

/*
2: The following function (celsToFahr) should convert a Celsius temperature
to Fahrenheit. Complete the body of the function such that it will take a
 Celsius parameter, and convert it into Fahrenheit.
*/

function CelsToFahr(cels) {
  let fahr;
  /*********Your Solution ********/

  /*******************************/
  return fahr;
}

console.log(CelsToFahr(100));
console.log(CelsToFahr(0));
console.log(CelsToFahr(22));
/*
3: Complete the following sum function:
*/

function sum(x,y) {
  let total;
  /*********Your Solution ********/

  /*******************************/
  return total;
}

console.log(sum(1,2));
console.log(sum("1",2));
console.log(sum("1","2"));
console.log(sum("banana",2));
console.log(sum(1.3,2.4));
/*
4: Complete the following isEven function, returning a boolean if the
argument (num) is even and a number.
*/

function isEven(num) {
  let bool;
  /*********Your Solution ********/

  /*******************************/
  return bool;
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven("banana"));
console.log(isEven(190702));
console.log(isEven("2"));

/*
5: Use a ternary operator in the following 'styleMeltdownWarningNotification' function
to return the string 'red' if the parameter 'coolantLvl' is less than 80, or
the string 'green' if 'coolantLvl' is 80 or above. If the input value is not a
number, return 'red' (something is clearly wrong);
*/

function styleMeltdownWarningNotification(coolantLvl) {
  let color;
  /*********Your Solution ********/

  /*******************************/
  return color;
}

console.log(styleMeltdownWarningNotification(100));
console.log(styleMeltdownWarningNotification(80));
console.log(styleMeltdownWarningNotification(79));
console.log(styleMeltdownWarningNotification(0));
console.log(styleMeltdownWarningNotification(NaN));
console.log(styleMeltdownWarningNotification(undefined));
console.log(styleMeltdownWarningNotification("oh the humanity"));

/*
6: Modify the the randomWholeNumberGenerator(maximumNumberValue) function to
return either a random number between 0 and the number provided as an argument,
if the result would be NaN, return 0. Do NOT use an if/else to accomplish this.

To generate a random number between 0-1, use the Math.random() method.
*/

function randomWholeNumberGenerator(maximumNumberValue) {
  let randomNum;
  /*********Your Solution ********/

  /*******************************/
  return randomNum;
}

console.log(randomWholeNumberGenerator(2))
console.log(randomWholeNumberGenerator(100))
console.log(randomWholeNumberGenerator(undefined))
console.log(randomWholeNumberGenerator(NaN))
console.log(randomWholeNumberGenerator("banana"))
console.log(randomWholeNumberGenerator("5"))
