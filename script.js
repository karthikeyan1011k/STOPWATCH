/* create the variables what we required */
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
var stopTime = 0;
/* start function */
function start() {
  timer = true;
  stopwatch();
}
/* stop function */
function stop() {
  timer = false;
}
/* reset function */
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  /* reset the value of timer */
  document.getElementById('hours').innerHTML = '00';
  document.getElementById('minutes').innerHTML = '00';
  document.getElementById('seconds').innerHTML = '00';
  document.getElementById('counter').innerHTML = '00';
}
/* stop watch function */
function stopwatch() {
  if (timer == true) {
    count++;
    if (count == 100) {
      sec++;
      count = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hour++;
      min = 0;
    }
    /* convert number to string  */
    var hrStr = hr;
    var minStr = min;
    var secStr = sec;
    var countStr = count;
    if (hr < 10) hrStr = "0" + hr;
    if (min < 10) minStr = "0" + min;
    if (sec < 10) secStr = "0" + sec;
    if (count < 10) countStr = "0" + count;
    /* display the results */
    document.getElementById('hours').innerHTML = hrStr;
    document.getElementById('minutes').innerHTML = minStr;
    document.getElementById('seconds').innerHTML = secStr;
    document.getElementById('counter').innerHTML = countStr;
    setTimeout("stopwatch()", 10);
  }
}
/* create the background change variables and function */ 
const body = document.querySelector('body');
const heading = document.getElementById('heading');
const watch = document.getElementById('stopwatch');
const toggle = document.getElementById('toggledrak');
toggle.addEventListener('click', function() {
  this.classList.toggle('bi-moon');
  if(this.classList.toggle('bi-brightness-high-fill')){
     body.style.background = '#e6e5e5ff';
     watch.style.color = '#4a4545af';
     body.style.color  = 'black';
     heading.style.color = '#322f2f';
     body.style.transition = '1s';
  } else{
    body.style.background = '#322f2f';
     watch.style.color = '#e6e5e5ff';
     body.style.color  = '#e6e5e5ff';
     heading.style.color = '#e6e5e5ff';
     body.style.transition = '1s';
  }
})