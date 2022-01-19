// "{{()}}[]"
var isValid = function (s) {
  let stack = [];

  for (let a of s) {
    if (["{", "(", "["].includes(a)) stack.push(a);
    else {
      const last = stack.pop();
      if (!last) return false;
      if (last === "(" && a !== ")") return false;
      if (last === "[" && a !== "]") return false;
      if (last === "{" && a !== "}") return false;
    }
  }

  return stack.length === 0;
};
