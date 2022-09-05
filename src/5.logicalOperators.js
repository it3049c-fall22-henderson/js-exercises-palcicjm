// use the logical operator not if statements

// or: should return true if either a or b are truthy. False, if both are false

a = truthy;
b = truthy;

function or(a, b) {
  expect(logicalOperatorsAnswers.or(false, true)).toBeTruthy();
  expect(logicalOperatorsAnswers.or(true, false)).toBeTruthy();
  expect(logicalOperatorsAnswers.or(true, true)).toBeTruthy();
  expect(logicalOperatorsAnswers.or(false, false)).toBeFalsy();
  }

//and: should return true only if both a and b are truthy

function and(a, b) {
  expect(logicalOperatorsAnswers.and(false, true)).toBeFalsy();
  expect(logicalOperatorsAnswers.and(false, false)).toBeFalsy();
  expect(logicalOperatorsAnswers.and(true, false)).toBeFalsy();
  expect(logicalOperatorsAnswers.and(true, true)).toBeTruthy();
  
}

module.exports = {
  or,
  and
};