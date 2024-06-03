
//   Create a file named “formatName” that contains a function named “formatName” function.
//   The function should accept a string and return the trimmed and capitalized version of the string.
//   E.g If the input is
//   “   victor red   ”, the return value should be “Victor Red”.
 
const formatName = (string) => {
  //first use the split method  which will automatically convert the string to an array
  //  then map through the array and access the first character in each array item then capitalized
  // it and then remove the first letters while joining the words together
  // then return the array back to string with the joined method and then remove excess space using the trim method.

  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').trim();

  //   .replace(/^\s+|\s+$/gm,'');
};

const sentence = " capitalize each word in this sentence ";
console.log(formatName(sentence));
