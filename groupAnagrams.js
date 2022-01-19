var groupAnagrams = function (strs) {
  let hashMap = {};

  strs.forEach((s) => {
    let c = s;
    c = c.split("").sort().join("");
    if (hashMap[c]) hashMap[c].push(s);
    else hashMap[c] = [s];
  });

  let arr = [];
  for (let key in hashMap) {
    arr.push(hashMap[key]);
  }

  return arr;
};
