// strictEquality: compare value & type
// Example: strictEquality(1, true) => false
// Example: strictEquality(1, 1) => true
val1 = "1";
val2 = 1;
function strictEquality(val1, val2) {
  expect(equalityAnswers.strictEquality(1, `1`)).toBeFalsy();
  expect(equalityAnswers.strictEquality(1, 1)).toBeTruthy();
  expect(equalityAnswers.strictEquality(0, false)).toBeFalsy();
  return ;
}
//equality: compare value but not necessarily the type
// Example: equality(1, true) => true
// Example: equality(1, 1) => true
// Example: equality(1, false) => false
val1 = "1";
val2 = 1;
function equality(val1, val2) {
  expect(equalityAnswers.equality(1, `1`)).toBeTruthy();
  expect(equalityAnswers.equality(1, 1)).toBeTruthy();
  expect(equalityAnswers.equality(0, false)).toBeTruthy();
  expect(equalityAnswers.equality(0, 1)).toBeFalsy();
  return ;
}

module.exports = {
  strictEquality,
  equality
};
