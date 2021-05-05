
function convertAndValidateNumsArray(numsAsStrings) {
    let results = [];
    for (let i = 0; i < numsAsStrings.length; i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if (Number.isNaN(valToNumber)) {
            return new Error(`${numsAsStrings[i]} is not a number`);
        }
        
        results.push(valToNumber);
    }
    return results;
}


function findMean(nums) {
    if(nums.length === 0) return 0;
    return nums.reduce(function(acc, cur) {
        return acc + cur;
    }) / nums.length;
}

function findMedian(nums) {
    
    nums.sort((a, b) => a - b);

    let middleIdx = Math.floor(nums.length / 2);
    let mediam;

    if (nums.length % 2 === 0) {
        median = (nums[middleIdx] + nums[middleIdx - 1]) / 2;
    } else {
        median = nums[middleIdx];
    }
    return median;
}


function createFrequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}


function findMode(arr) {
    let freqCounter = createFrequencyCounter(arr);
    let count = 0;
    let mostFrequent;

    for (let key in freqCounter) {
        if (freqCounter[key] > count) {
            mostFrequent = key;
            count = freqCounter[key];
        }
    }
    return +mostFrequent;
}


module.exports = {
    createFrequencyCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumsArray
  };