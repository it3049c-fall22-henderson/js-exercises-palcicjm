const { concat } = require("./3.arrays");

/**
 * The following object must contain:
 *  `first_name`property that is of type string
 *  `last_name` property that is of type string
 *  `class_of` property that is of type number
 *   a `full_name` function that would return the concatenation of `first_name` and `last_name` properties.
 *   an `introduction` function that returns a string of a welcome message. The introduction function:
 *      * must call the `full_name()` function to present the person's name.
 *      * must use the `class_of` property in the introduction
 */
const personObject = {
  first_name: Jackson,
  last_name: Palcic,
  class_of: 2023
};

function name(full_name) {
  full_name = concat(first_name, last_name);
  return full_name;
}

function introduction(intro) {
  intro = concat(full_name, class_of);
  return;
}

module.exports = {
  personObject
};