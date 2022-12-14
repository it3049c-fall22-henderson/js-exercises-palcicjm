const equalityAnswers = require(`../7.equality`);

describe(`6.equality`, function () {

  val1 = "1";
  val2 = 1;

  it(`strictEquality: compare value & type`, function () {
    expect(equalityAnswers.strictEquality(1, `1`)).toBeFalsy();
    expect(equalityAnswers.strictEquality(1, 1)).toBeTruthy();
    expect(equalityAnswers.strictEquality(0, false)).toBeFalsy();
  });

  val1 = "1";
  val2 = 1;

  it(`equality: compare value but not necessarily the type`, function () {
    expect(equalityAnswers.equality(1, `1`)).toBeTruthy();
    expect(equalityAnswers.equality(1, 1)).toBeTruthy();
    expect(equalityAnswers.equality(0, false)).toBeTruthy();
    expect(equalityAnswers.equality(0, 1)).toBeFalsy();
  });
});
