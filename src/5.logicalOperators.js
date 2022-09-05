// use the logical operator not if statements
falseVariable = false
// or: should return true if either a or b are truthy. False, if both are false
function or(a, b) {
  if (a == true || b == true) {
    trueVariable = true;
    return trueVariable;
  }
  else {return falseVariable;}
}

//and: should return true only if both a and b are truthy
function and(a, b) {
  if (a && b == true) {
    trueVariable = true;
    
    return true;
  }
  
  else {return falseVariable}
}

module.exports = {
  or,
  and
};