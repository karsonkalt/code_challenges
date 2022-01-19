var fib = function (n) {
  cache = {};

  function recurseFib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (cache[n]) return cache[n];
    if (n > 1) {
      cache[n] = recurseFib(n - 1) + recurseFib(n - 2);
      return cache[n];
    }
  }

  return recurseFib(n);
};
