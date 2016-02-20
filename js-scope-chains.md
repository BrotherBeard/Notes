## 【javascript】理解从词法环境下的父级继承scope chains

#### sample 1

```javascript
  var x =1;
  function test() {
    alert(x);
  }
  (function () {
    var x = 2;
    test();
   })();
```

#### sample 2

```javascript
  var x = 1;
  (function () {
    var x = 2;
    function test() {
      alert(x);
    }
    test();
   })();
```
