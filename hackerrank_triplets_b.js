// solution b - a bit DRYer than solution a, but it still seems overly long.
function compareTriplets(a, b) {
  let aliceResult = 0;
  let bobResult = 0;
  const results = []

  function compareAnyIndex(indexA, indexB) {
    if (indexA > indexB) {
      aliceResult += 1
    } else if (indexA < indexB) {
      bobResult += 1;
    }
  }

  compareAnyIndex(a[0], b[0]);
  compareAnyIndex(a[1], b[1]);
  compareAnyIndex(a[2], b[2]);

  results.push(aliceResult);
  results.push(bobResult);
  return results;
}


const aliceScores = [4, 5, 6];
const bobScores = [1, 2, 9]
console.log(compareTriplets(aliceScores, bobScores));
