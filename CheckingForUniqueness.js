// Write an algorithm that determines whether all the elements in a string are unique.
//You may not convert the string into an array or use array methods to solve this problem.
// The algorithm should return a boolean.

const isUnique = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) return false;
  }
  return true;
};

console.log(isUnique("copyright"));
