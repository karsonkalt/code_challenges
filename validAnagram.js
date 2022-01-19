var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let sa = s.split("").sort(),
    ta = t.split("").sort();

  let ti = 0;

  for (let si = 0; si < sa.length; si++) {
    if (sa[si] === ta[ti]) {
      ti++;
    } else {
      return false;
    }
  }
  return true;
};
