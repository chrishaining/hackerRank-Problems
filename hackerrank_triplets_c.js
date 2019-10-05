//solution using a for loop. I like this solution more than solutions a and b, because it seems DRYer to me. But it frustrates me that I haven't worked out how to use a forEach enumerator. I'll share ideas with my classmates.
function compareTriplets(a, b) {
  let aliceResult = 0;
  let bobResult = 0;
  const results = [];
  // const results = [aliceResult, bobResult];
  // const results = [0, 0];
  for (let i = 0; i < a.length; i++) {
    for (let i = 0; i < b.length; i++) {}
    if (a[i] > b[i]) {
      aliceResult++;
    } else if (a[i] < b[i]) {
      bobResult++;
    }


  }
  results.push(aliceResult);
  results.push(bobResult);
  return results;
}

const aliceScores = [4, 5, 6];
const bobScores = [1, 2, 9]
console.log(compareTriplets(aliceScores, bobScores));
