function zipList(arrayA, arrayB) {
  const arrayC = [];
  if (arrayA.length !== arrayB.length) {
    return 'array lengths don\'t match';
  }
  for (let i = 0; i < arrayA.length; i++) {
    arrayC.push(arrayA[i]);
    arrayC.push(arrayB[i]);
  }
  return arrayC;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));

function zipListTheEasyWay(arrayD, arrayE) {
  if (arrayD.length !== arrayE.length) {
    return 'arrays don\'t match';
  }
  return _.flatten(_.zip(arrayD, arrayE));
}

console.log(zipListTheEasyWay(['a', 'b', 'c'], [1, 2, 3]));
