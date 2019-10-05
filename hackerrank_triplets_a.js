// function compareTriplets(a, b) {
//   let aliceResult = 0;
//   let bobResult = 0;
//   const results = [];
//   // const results = [aliceResult, bobResult];
//   // const results = [0, 0];
//
//   // console.log(`results before the loop: ${results}`);
//   // a.forEach((scoreA, index) => {
//   //   b.forEach((scoreB, index) => {
//   //     if (scoreA[index] > scoreB[index]) {
//   //       // aliceResult += 1
//   //       results[0] += 1
//   //     } else if (scoreB[index] > scoreA[index]) {
//   //       // bobResult +=1
//   //       results[1] += 1
//   //     }
//   //     console.log(`${scoreA} versus ${scoreB}: ${results}`);
//   //   })
//   // });
//   // // return results.push();
//   // return results;
//
//   console.log(`results before the loop: ${results}`);
//   a.forEach((scoreA) => {
//     b.forEach((scoreB) => {
//       if (scoreA > scoreB) {
//         aliceResult += 1
//         // results[0] += 1
//         // results[0] ++
//       } else if (scoreB > scoreA) {
//         bobResult +=1
//         // results[1] += 1
//         // results[1] ++
//
//       }
//       // console.log(`${scoreA} versus ${scoreB}: ${results}`);
//     })
//   });
//   // return results.push();
//   results.push(aliceResult);
//   results.push(bobResult);
//   return results;
//
//
//
// }
//
//
// const aliceScores = [4, 5, 6];
// const bobScores = [1, 2, 9]
//
// //expecting [1, 1]
// // console.log('oooh');
// console.log(compareTriplets(aliceScores, bobScores));

//this isn't working - it is iterating through the arrays. it is comparing each of alice's scores with each of bob's and is correctly identifying which is greater. BUT it isn't adding 1. It is subtracting the low score from the high score and pushing that difference into the relevant index position in the final array (results).

//long-winded solution
function compareTriplets(a, b) {
  let aliceResult = 0;
  let bobResult = 0;
  const results = []

  if (a[0] > b[0]) {
    aliceResult += 1
  } else if (a[0] < b[0]) {
    bobResult += 1;
  }

  if (a[1] > b[1]) {
    aliceResult += 1
  } else if (a[1] < b[1]) {
    bobResult += 1;
  }

  if (a[2] > b[2]) {
    aliceResult += 1
  } else if (a[2] < b[2]) {
    bobResult += 1;
  }

  results.push(aliceResult);
  results.push(bobResult);
  return results;
}


const aliceScores = [4, 5, 6];
const bobScores = [1, 2, 9]
console.log(compareTriplets(aliceScores, bobScores));
