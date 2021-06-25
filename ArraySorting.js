// Write an algorithm that sorts an array without using the sort() method.
// There are many different sorting algorithms - take the time to read about the following:
//Example

// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

function merge(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
}
var input = [9, 2, 7, 12];
console.log(merge(input));
