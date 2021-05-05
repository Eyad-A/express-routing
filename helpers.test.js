const {
    findMean,
    findMedian,
    findMode,
  } = require("./helpers");

  describe("findMedian", function() {
      it("finds the median of an even array of nums", function() {
          expect(findMedian([1,2,3,4])).toEqual(2.5)
      })
      it("finds the median of an odd array of nums", function() {
          expect(findMedian([1,2,3,4,5])).toEqual(3)
      })
  })

  describe("findMean", function() {
      it("finds the mean of array of nums", function() {
          expect(findMean([3,4,12,88])).toEqual(26.75)
      })
  })

  describe("findMode", function() {
      it("finds the most frequent num in an array of nums", function() {
          expect(findMode([16,25,26,41,16,20,16])).toEqual(16);
      })
  })