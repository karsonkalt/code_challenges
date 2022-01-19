// hh:mm:ss,nnn-nnn-nnn"
// duration of the call and the recipient

//handle edge cases

//if shorter than 5 minutes, 3cents * seconds of call
// $.03 * seconds
// if it was 5 min or longer, then we pay 150 cents for every min of the call
// $1.50 * minutes
// minutes always rounds up, if it was 5 min 1 second it is 6 minutes.

// all calls to the phone number i called the most are free
// If there are two numbers i called the most then it's only one.

// "00:01:07,400-234-090
//   00:05:01,701-080-080
//  00:05:00,400-234-090"

const S = `00:01:07,400-234-090
00:05:01,701-080-080
00:05:00,400-234-090`;

function solution(S) {
  class Call {
    constructor(durationString, numberCalled) {
      this.durationInSeconds =
        this.convertHHMMSStoNumberOfSeconds(durationString);
      this.numberCalled = numberCalled;
    }

    get cost() {
      if (this.durationInSeconds < 300) {
        return this.durationInSeconds * 0.03;
      }

      return Math.ceil(this.durationInSeconds / 60) * 60 * 0.025;
    }

    convertHHMMSStoNumberOfSeconds(string) {
      const arr = string.split(":");

      const h = +arr[0] * 60 * 60;
      const m = +arr[1] * 60;
      const s = +arr[2];

      return h + m + s;
    }
  }

  const arrS = S.split("\n").map((string) => string.split(","));

  let allCalls = arrS.map((call) => new Call(...call));

  function numberCalledMost(arrayOfCalls) {
    const hashMap = {};

    for (const call of arrayOfCalls) {
      if (hashMap[call.numberCalled]) {
        hashMap[call.numberCalled] += call.durationInSeconds;
      } else {
        hashMap[call.numberCalled] = call.durationInSeconds;
      }
    }

    let maxLength = 0;
    let longestNumberCalled = "";

    for (let numberCalled in hashMap) {
      if (hashMap[numberCalled] > maxLength) {
        maxLength = hashMap[numberCalled];
        longestNumberCalled = numberCalled;
      }
    }

    return longestNumberCalled;
  }

  let callsToSum = allCalls.filter(
    (call) => call.numberCalled !== numberCalledMost(allCalls)
  );

  function reducer(prevVal, curVal) {
    return prevVal + curVal;
  }

  const totalCost = callsToSum.map((call) => call.cost).reduce(reducer);

  return totalCost * 100;
}
