// Test 1
// Test Input
// 100,500

// Expected Output
// 147 // 12 dif between each digit is multiple of 3
// 174 // 12 dif between each digit is multiple of 3
// 258 // 15
// 285 // 15
// 417 // 12
// 471 // 12

// // i only need to check if i've seen that index before
// if i'm on the first, check size of my memo matches length of number

function scrollingNum(range1, range2) {
  let sol = [];

  for (let range = range1; range <= range2; range++) {
    let visited = new Set();
    let visitedNums = new Set();

    function recurseCheck(idx) {
      const num = parseInt(new String(range)[idx]);
      const l = new String(range).length;

      if (
        visited.has(0) &&
        idx === 0 &&
        visited.size === l &&
        visitedNums.size === l
      )
        return true;
      if (visited.has(idx)) return false;

      visited.add(idx);
      visitedNums.add(num);
      let nextIdx = num + idx;
      if (nextIdx > l) {
        nextIdx = nextIdx % l;
      }
      return recurseCheck(nextIdx);
    }
    if (recurseCheck(0)) sol.push(range);
  }

  return sol;
}
