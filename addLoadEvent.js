/**
* @usage: bind multiple functions to the window.onload event
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
}

function a () {
    console.log('this is func a');
}
function b () {
    console.log('this is func b');
}
  //bind the function a, b
  addLoadEvent(a);
  addLoadEvent(b);
  //... bind more functions here
