function zipList(arrayA, arrayB) {
  const arrayC = [];
  if (arrayA.length !== arrayB.length) {
    return 'Arrays are different lengths';
  }
  for (let i = 0; i < arrayA.length; i++) {
    arrayC.push(arrayA[i]);
    arrayC.push(arrayB[i]);
  }
  return arrayC;
}

function zipListTheSimpleWay(arrayD, arrayE) {
  if (arrayD.length !== arrayE.length) {
    return 'Arrays are different lengths';
  }
  return _.flatten(_.zip(arrayD, arrayE));
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipList(['d', 'e', 'f'], [4, 5]));
console.log(zipListTheSimpleWay(['d', 'e', 'f'], [4, 5, 6]));
console.log(zipListTheSimpleWay(['d', 'e', 'f'], [4, 5]));