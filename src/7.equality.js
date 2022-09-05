// strictEquality: compare value & type
// Example: strictEquality(1, true) => false
// Example: strictEquality(1, 1) => true
val1 = "1";
val2 = 1;
function strictEquality(val1, val2) {
  if (val1 === val2) {
    return true;
  }
  else {
    return false;
  }
  
}
//equality: compare value but not necessarily the type
// Example: equality(1, true) => true
// Example: equality(1, 1) => true
// Example: equality(1, false) => false
val1 = "1";
val2 = 1;
function equality(val1, val2) {
  if (val1 = val2) {
    return true;
  }
  else {
    return false;
  }


}

module.exports = {
  strictEquality,
  equality
};
