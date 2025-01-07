// Refactor following solution
// Find an intersection of two dictionaries

'use strict'

const intersection = (firstObject, secondObject) => {
  const firstKeys = Object.keys(firstObject);
  for (const attributeName of firstKeys) {
    if (firstObject[attributeName] === secondObject[attributeName]) {
      secondObject[attributeName] = firstObject[attributeName];
    } else {
      delete firstObject[attributeName];
    }
  }
  return firstObject;
};

module.exports = intersection;
