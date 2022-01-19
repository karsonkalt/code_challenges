let s = "110001111000000";
// [ 2, 3, 4, 6]

var countBinarySubstrings = function (s) {
  function convertToGroups(s) {
    let arr = [];
    let counter = 0;
    let lastChar = s[0];

    for (let i = 0; i < s.length; i++) {
      const curChar = s[i];
      if (curChar === lastChar) {
        counter++;
      } else {
        arr.push(counter);
        counter = 1;
        lastChar = curChar;
      }
    }
    arr.push(counter);
    return arr;
  }

  const groups = convertToGroups(s);
  let numCombos = 0;

  for (let i = 0; i < groups.length - 1; i++) {
    numCombos += Math.min(groups[i], groups[i + 1]);
  }

  return numCombos;
};

countBinarySubstrings(s);
