var camelMatch = function (queries, pattern) {
  return queries.map((query) => {
    let i = 0;
    for (const a of query) {
      if (a === pattern[i]) i++;
      else if (a === a.toUpperCase()) return false;
    }
    return i === pattern.length;
  });
};
