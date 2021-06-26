// Write an algorithm that determines whether all the elements in a string are unique.
//You may not convert the string into an array or use array methods to solve this problem.
// The algorithm should return a boolean.

const isUnique = (str) => {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (!newString.includes(str[i])) {
      newString = newString.concat(str[i]);
    }
  }
  return newString.length === str.length;
};

console.log(isUnique("qwert yuiop"));

const isUniqueRecursive = (str, index) => {
  console.log(str, index);
  if (index >= str.length) {
    return;
  }

  if (str.includes(str[index])) {
    return false;
  } else {
    return isUniqueRecursive(str, (index += 1));
  }
};

console.log(isUniqueRecursive("qwert yuiopt", 0));
