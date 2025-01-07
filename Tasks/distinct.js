// Refactor following solution
// Return an array without duplicates

'use strict';

const distinct = (data) => {
  const uniqueCollection = new Set();
  const uniqueData = [];
  data.forEach((element) => {
    if (!uniqueCollection.has(element)) {
      uniqueCollection.add(element);
      uniqueData.push(element);
    }
  });
  return uniqueData.filter((x) => typeof x === 'number');
};

module.exports = distinct;
