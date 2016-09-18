// Global Varibles for use in all functions
var iterations, msg, scores, index;
iterations = 1000000;
msg = '';
scores = [91,75,86,59,76,81,88,79]
index = 7;

/**
 * Repeatedly tests a function for performance
 * function funcToTest the function under test
 * int reps the number of repeated calls
 * returns array with formatted values:
 *  [total time for 'reps' iterations, avg iterations per second, reps]
 */
function testPerformance(funcToTest, reps) {
  var t0, t1, total, average;
  t0 = performance.now();
  for (var i = 0; i < reps; i++) {
    funcToTest(scores)
  }
  t1 = performance.now();
  total = parseFloat((t1 - t0)).toFixed(2);
  average = parseFloat((reps * 1000 / (t1 - t0))).toFixed(2);
  return [formatWithCommas(total), formatWithCommas(average), formatWithCommas(reps)];
}

var ifIndexScore = testPerformance(function(scoreArray, index){
  var grade = '';
  if(scoreArray[index] >= 90){
    grade = 'A';
  } else if (scoreArray[index] >= 80){
    grade = 'B';
  } else if (scoreArray[index] >= 70){
    grade = 'C';
  } else if (scoreArray[index] >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
}, iterations);

var ifCacheScore = testPerformance(function(scoreArray, index){
  var grade = '';
  var s = scoreArray[index];
  if(s >= 90){
    grade = 'A';
  } else if (s >= 80){
    grade = 'B';
  } else if (s >= 70){
    grade = 'C';
  } else if (s >= 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
}, iterations);

msg += 'Using <code>array[i]</code> inside <code>if()</code> takes ' + ifIndexScore[0] + ' ms for ' + ifIndexScore[2] + ' iterations (' + ifIndexScore[1] + ' per sec).<br>';
msg += 'Caching <code>array[i]</code> outside <code>if()</code> takes ' + ifCacheScore[0] + ' ms for ' + ifCacheScore[2] + ' iterations (' + ifCacheScore[1] + ' per sec).<br>';

document.getElementById('output').innerHTML = msg;
