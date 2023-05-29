function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 1; i++) {
    if (runThrough(array[i], array.slice(i+1), target)) {
      return true;
    }
  }
  return false;
}
function runThrough(a, subArray, target) {
  for (let i = 0; i < subArray.length; i++) {
    if (sumCompare(a, subArray[i], target)) {
      return true;
    }
  }
  return false;
}
function sumCompare(a, b, target) {
  return (a + b === target);
}

/* 
  Write the Big O time complexity of your function here
Running through a for loop is linear, therefore:
O(n x 2 steps) =
O(n)
*/

/* 
  Add your pseudocode here
1. Create function (hasTargetSum) with 2 variables, an array and a target
2. Iterate through array with for loop that is 2 less than the length of the array.  (We don’t need the last item in the array since we will have already compared that value.)
3. In the for loop, call a function (runThrough) with 3 variables (the i position in array, a slice of the array - with the i position and anything before it removed, and the target.)
4. In each iteration of the runThrough loop, call a compareSum function returning true if i+i of the sub array = target. 
*/

/*
  Add written explanation of your solution here
-The has TargetSum function takes two parameters-array and target.
-The function starts with a for loop that starts at 0 and goes through 2 minus the length of the array.  This becuase we will not need to look at the last number in the array because we will have already tried it with other values in the array.
-For each loop, I call a new function runThrough that will loop through a subset of array--essentially the original array without the current array number and any before it.
-Each iteration through the runThrough loop will call sumCompare, which will return true if the current value of the array plus the subArray value equals the target.
-If after all the multiple loops there is no solution, then TargetSum will return false.
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;