var merge = function (intervals) {
  // sort by beginning number
  intervals.sort((el1, el2) => (el1[0] > el2[0] ? 1 : -1));
  //[[1,3],[2,6],[8,10],[15,18]]

  let first = true;
  let mergedArr = [];
  let runningLowest, runningHighest;

  intervals.forEach((subArr) => {
    if (first) {
      first = false;
      (runningLowest = intervals[0][0]), (runningHighest = intervals[0][1]);
    } else if (subArr[0] >= runningLowest && subArr[0] <= runningHighest) {
      if (subArr[1] > runningHighest) {
        runningHighest = subArr[1];
      }
    } else {
      mergedArr.push([runningLowest, runningHighest]);
      runningLowest = subArr[0];
      runningHighest = subArr[1];
    }
  });
  mergedArr.push([runningLowest, runningHighest]);

  return mergedArr;
};
