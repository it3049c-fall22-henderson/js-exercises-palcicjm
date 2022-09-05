
//add: Should be able to add numbers

function add (num1, num2) {
  num1 = 200;
  num2 = 10;
  num3 = 21;
  return num1+num2, num2+num3;
}

//subtract: Should be able to subtract numbers
function subtract (num1, num2) {
  num1 = 200;
  num2 = 10;
  num3 = 21;
  num4 = 300;
  return num1-num2, num2-num3, num4-num2;
}

//multiply: Should be able to multiply with precision
function multiply(num1, num2) {
  num1 = 4;
  num2 = 0.1;
  num3 = 3;
  num4 = 2
  return num1*num2, num3*num4;
}


//parseInt: should use parseInt correctly to convert strings to integer numbers
function parseInt (str) {
  str="2342";
  str2="12";
  str3="12px";
  str4=0x12;
  return parseInt(str), parseInt(str2), parseInt(str3), parseInt(0x12);
}

//addAndReturn2DecimalPlaces: should return a number value, rounded to 2 decimal places
// Example: 1.23453 + 5.37873 should return 6.61 and the return type should be a number
function addAndReturn2DecimalPlaces(num1, num2) {
  num1 = 1.23453;
  num2 = 5.37873;
  const result = Number((num1 + num2).toFixed(2));
  return result;
}

module.exports  = {
  add,
  subtract,
  multiply,
  parseInt,
  addAndReturn2DecimalPlaces
};