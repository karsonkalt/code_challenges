var longestStrChain = function (words) {
  // let cache = {}

  function rm(str, i) {
    return str.substr(0, i) + str.substr(i + 1);
  }

  function recurse(word) {
    // if (cache.has(word)) return cache[word]
    console.log(word);
    for (let i = 0; i < word.length; i++) {
      let nw = rm(word, i);
      if (words.includes(nw)) {
        return 1 + recurse(nw);
      }
    }
    return 1;
    //make all the words available
    // if that word is in words increase length by one and do it again
  }

  let length = [];

  for (const word of words) {
    length.push(recurse(word));
    console.log("----");
  }

  console.log(length);

  return Math.max(...length);
};
