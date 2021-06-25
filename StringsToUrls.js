// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example

// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%20Jones"

const stringToUrl = (s) => {
  console.log(s);
  if (typeof s !== "string") {
    return "wrong input type";
  }
  if (s === "") {
    return "";
  }
  // need to get index of space
  const indexOfSpace = s.indexOf(" ");
  // need to make sure index is within range of the string. It will give -1 if it's not
  if (indexOfSpace >= 0) {
    return stringToUrl(
      s
        .substring(0, indexOfSpace)
        .concat("%20") // concat %20 just after index of space
        .concat(s.substring(indexOfSpace + 1, s.length)) // in order to not count the space twice, we need to get the index of the space and add 1 for new substring
    );
  }
};

stringToUrl("this is a new string");
