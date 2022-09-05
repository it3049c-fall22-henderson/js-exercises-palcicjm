//reverseString: you should be able to reverse a string
// Example: "abc" => "cba"


function reverseString(str) {
  strArray = str.split();
  strReverseArray = str.reverse();
  /**
   * can be achieved by combining: 
   *    1. string.prototype.split
   *    2. array.prototype.reverse
   *    3. array.prototype.join
   * 
   * Can even be done on one line
   */
  return strReverseArray.join('');
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  return str.toUpperCase();
}

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {
  strArray = str.split();
  return strArray = str.split(`,`);
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};