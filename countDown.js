/**
 * usage: 60 seconds' countdown
 *
 */
```js
var obj = {t: 60};

function countDown() {
  setTimeout(function () {
    if (obj.t >= 1) {
      console.log(obj.t);
      obj.t--; 
      countDown();
    } else {obj.t = 60;}
  }, 1000);
}

//test: countDown();
```
