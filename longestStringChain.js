var longestStrChain = function (words) {
  let cache = {};

  function rm(str, i) {
    return str.substr(0, i) + str.substr(i + 1);
  }

  function recurse(word) {
    if (word in cache) return cache[word];
    let maxLength = 1;

    console.log(word);
    for (let i = 0; i < word.length; i++) {
      let nw = rm(word, i);
      if (words.includes(nw)) {
        let curLength = 1 + recurse(nw);
        maxLength = Math.max(maxLength, curLength);
      }
    }
    cache[word] = maxLength;
    return maxLength;
    //make all the words available
    // if that word is in words increase length by one and do it again
  }

  let length = [];

  for (const word of words) {
    length.push(recurse(word));
    console.log(cache);
    console.log("----");
  }

  console.log(length);
  console.log(cache);

  return Math.max(...length);
};
