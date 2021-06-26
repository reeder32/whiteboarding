// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem,
// demonstrate how it can be solved with filter().Solve the problem with and without recursion.

// Example

// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

const deDupArrayWithRecursion = (arr, newArray = [], index) => {
  console.log(arr[index], newArray, index);
  if (arr.length === 0) {
    return newArray;
  }
  if (!newArray.includes[arr[index]]) {
    console.log("true");
    newArray.push(arr[index]);
    // so need to check array at 0 & 1, need to remove index of 1 each time
    return deDupArrayWithRecursion(arr, newArray, index + 1);
  } else {
    console.log("false");
  }
  //return deDupArrayWithRecursion(arr);
};

console.log(deDupArrayWithRecursion([7, 9, "hi", 12, "hi", 7, 53], [], 0));

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
