// 11106

let numDecodings = (s) => {
  const valid = (s) => {
    if (s[0] === "0") return false;
    return 1 <= s && s <= 26;
  };

  let cache = {};
  function recurse(s) {
    if (cache[s]) return cache[s];

    if (s === "") return 1;

    let num = 0;
    if (s[0] && valid(s[0])) {
      num += recurse(s.slice(1));
    }

    if (s[1] && valid(s[0] + s[1])) {
      num += recurse(s.slice(2));
    }

    cache[s] = num;
    return num;
  }

  return recurse(s);
};

console.log(numDecodings("11106"));
