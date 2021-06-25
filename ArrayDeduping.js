// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem,
// demonstrate how it can be solved with filter().Solve the problem with and without recursion.

// Example

// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

const deDupArrayWithRecursion = (arr) => {
  if (arr.length === 0) {
    return;
  }
};

console.log(deDupArrayWithRecursion([7, 9, "hi", 12, "hi", 7, 53]));

const deDupArray = (arr) => {
  return arr.filter((w, i) => arr.indexOf(w) == i);
};

console.log(deDupArray([7, 9, "hi", 12, "hi", 7, 53]));
