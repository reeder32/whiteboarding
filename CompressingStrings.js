// Write an algorithm that takes a string with repeated characters and compresses them,
//using a number to show how many times the repeated character has been compressed.For instance, aaa would be written as 3a.
//Solve the problem with and without recursion.

// Example

// Input: "aaabccdddda"

// Output: "3ab2c4da"

const compressingStrings = (str) => {
  let countArray = [];
  let index = 0;
  const strArray = str.split("");
  while (index < strArray.length) {
    const e = strArray[index];
    let count = 0;
    for (let j = index; j <= strArray.length; j++) {
      if (e === strArray[j]) {
        count += 1;
      } else {
        index = j;
        break;
      }
    }
    if (count > 1) {
      countArray.push(`${count}${e}`);
    } else {
      countArray.push(e);
    }
  }
  return countArray.Join("");
};

console.log(compressingStrings("aaabccddddaaantttyuuu"));

compressStringsUsingRecursion = (str) => {
  console.log(str);
  let holdingArray = Array(str.split("").length);
  if (str == "") {
    return;
  } else {
    console.log(holdingArray.length);
  }

  if (str.substring(0, 1) === str.substring(1, 2)) {
    //console.log("if");
    return compressStringsUsingRecursion(
      str.substring(1, 2).concat(str.substring(2, str.length))
    );
  } else {
    //console.log("else");
    return compressStringsUsingRecursion(str.substring(2, str.length));
  }
};

compressStringsUsingRecursion("aaabccddddaaa");
