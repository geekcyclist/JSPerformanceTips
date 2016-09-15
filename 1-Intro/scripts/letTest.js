//Globals
var iterations, msg, c;
iterations = 100000000;
msg = '';
let b;

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
    funcToTest(i)
  }
  t1 = performance.now();
  total = parseFloat((t1 - t0)).toFixed(2);
  average = parseFloat((reps * 1000 / (t1 - t0))).toFixed(2);
  return [formatWithCommas(total), formatWithCommas(average), formatWithCommas(reps)];
}

var letAtIfScope = testPerformance(function(i) {
  if (true) {
    let a = i;
  }
}, iterations);

var varAtIfScope = testPerformance(function(i) {
  if (true) {
    var a = i;
  }
}, iterations);

var letFunctionScope = testPerformance(function(i) {
  if (true) {}
  let a = i;
}, iterations);

var varFunctionScope = testPerformance(function(i) {
  if (true) {}
  var a = i;
}, iterations);

var letAsGlobal = testPerformance(function(i) {
  if (true) {}
  b = i;
}, iterations);

var varAsGlobal = testPerformance(function(i) {
  if (true) {}
  c = i;
}, iterations);


msg += 'Using <code>let</code> inside <code>if()</code> scope takes ' + letAtIfScope[0] + ' ms for ' + letAtIfScope[2] + ' iterations (' + letAtIfScope[1] + ' per sec).<br>';
msg += 'Using <code>var</code> inside <code>if()</code> scope takes ' + varAtIfScope[0] + ' ms for ' + varAtIfScope[2] + ' iterations (' + varAtIfScope[1] + ' per sec).<br><br>';
msg += 'Using <code>let</code> inside <code>function()</code> scope takes ' + letFunctionScope[0] + ' ms for ' + letFunctionScope[2] + ' iterations (' + letFunctionScope[1] + ' per sec).<br>';
msg += 'Using <code>var</code> inside <code>function()</code> scope takes ' + varFunctionScope[0] + ' ms for ' + varFunctionScope[2] + ' iterations (' + varFunctionScope[1] + ' per sec).<br><br>';
msg += 'Using <code>let</code> at global scope takes ' + letAsGlobal[0] + ' ms for ' + letAsGlobal[2] + ' iterations (' + letAsGlobal[1] + ' per sec).<br>';
msg += 'Using <code>var</code> at global scope takes ' + varAsGlobal[0] + ' ms for ' + varAsGlobal[2] + ' iterations (' + varAsGlobal[1] + ' per sec).<br>';

document.getElementById('output').innerHTML = msg;

