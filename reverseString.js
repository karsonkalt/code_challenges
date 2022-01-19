//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
    if(str.length === 0) {
        return str
    }
    return reverseString(str.slice(1)) + reverseString(str.)
}
reverseString("yoyo mastery");
// => 'yretsam oyoy'


function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    //   arson                                  + k
    return reverseStringRecursive(str.slice(1)) + str[0];
  }
}