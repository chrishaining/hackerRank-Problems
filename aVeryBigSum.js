//add the values of each item in the array (ar)to produce a value.
//the quick way is probably to reduce the array.

function aVeryBigSum(ar) {
  const sum = ar.reduce(( accumulator, currentValue ) => accumulator + currentValue, 0)
  console.log(sum);
}
aVeryBigSum([1, 2, 3]);
