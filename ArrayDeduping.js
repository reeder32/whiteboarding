// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem,
// demonstrate how it can be solved with filter().Solve the problem with and without recursion.

// Example

// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

const deDupArrayWithRecursion = (arr) => {
  console.log(arr);
  if (arr) {
    return;
  }
  if (arr[0] === arr[1]) {
    // so need to check array at 0 & 1, need to remove index of 1 each time
    return deDupArrayWithRecursion(arr.slice(1).concat[arr[1]]);
  } else {
    return [arr[0]].concat(deDupArrayWithRecursion(arr.slice(1)));
  }
  //return deDupArrayWithRecursion(arr);
};

console.log(deDupArrayWithRecursion([7, 9, "hi", 12, "hi", 7, 53]));

const deDupArray = (arr) => {
  // filter by checking if word does not exist in any index of the array
  return arr.filter((e, i) => arr.indexOf(e) == i);
};

console.log(deDupArray([7, 9, "hi", 12, "hi", 7, 53]));

// This is my prefered way of solving this problem
const deDupArrayWithSet = (arr) => {
  // sets can only have unique values, so just cast to new array
  return [...new Set(arr)];
};

console.log(deDupArrayWithSet([7, 9, "hi", 12, "hi", 7, 53]));
