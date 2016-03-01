/**
* func : bind multi-functions to the window.onload
*
*/

function addLoadEvent (func) {
  var oldOnLoad = window.onload;
  if (typeof oldOnLoad !== 'function') {
    window.onload = func;
  } 
  else {
    window.onload = function () {
      oldOnLoad();
      func();
  }
}

function a () {
  console.log('test a');
  }
function b () {
  console.log('test b');
  }
  
  addLoadEvent(a);
  addLoadEvent(b);
