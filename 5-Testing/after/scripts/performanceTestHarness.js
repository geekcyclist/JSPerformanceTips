// Create a PerformanceTest Object
// codeToTest: code wrapped in an anonymous 
// testParams: array of objects required to rund the codeToTest
// repetitions: optional - default 10,000
var PerformanceTest = function(codeToTest,testParams,repetitions) {
  this.codeToTest = codeToTest;
  this.testParams = testParams;
  this.repetitions = repetitions || 10000; //optional - logical assignment
  this.average = 0;
};

PerformanceTest.prototype = {
  runTest: function() {
    if (this.codeToTest(this.testParams) === false) {
      alert('Test failed with those parameters.');
      return;
    }
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++) {
      // beginTime = +new Date(); // for older browsers... + operator formats the date as milliseconds;
      beginTime = performance.now();
      this.codeToTest(this.testParams);
      //endTime = +new Date(); // for older browsers
      endTime = performance.now();
      sumTimes += endTime - beginTime;
    }
    this.average = sumTimes / this.repetitions;
    return console.log('Average execution time over ' + this.repetitions + ': ' + this.average);
  }
};
