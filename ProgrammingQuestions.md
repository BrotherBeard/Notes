1. 快乐数

> 快乐数定义如下：从任意一个正整数开始，计算这个数字每一位的数字的平方的和，得到一个数字；然后重复这一过程，直到这个数字收敛到1；或者陷入到一个不包含1的循环。如果能收敛到1的，就定义为快乐数。
> 例如，19是快乐数：
> •	1^2 + 9^2 = 82
> •	8^2 + 2^2 = 68
> •	62^2 + 8^2 = 100
> •	12^2 + 0^2 + 0^2 = 1
> 输出一个数字，判断是否是快乐数。

```javascript
function checkHappyNum (num) {
  var set = [num];
  var self = function () {
  var l = String(num).length, result = 0;
  if (new RegExp(/^10*$/).test(num)) return true; // match 10* 
    
  for (var i = l-1; i >= 0; i--) {
      var baseNum = Math.pow(10, i);
      var decreaseNum = parseInt(num/baseNum);
      result += Math.pow(decreaseNum,2);
      num = num - decreaseNum*baseNum;
  }
    num = result;
    if (set.indexOf(num) !== -1) return false; //check if the num occur in the history
    else {
      set.push(num);
      return self();
    }
  };
  return self();
}
//test
console.log(checkHappyNum(19));
```
