## javascript native methods' realization
**reverse array** 
```javascript
function reverseArray(array) {  
	var temp;	 
	var l = arr.length - 1;
	for ( var i = 0; i < arr.length / 2;  i++) {
		temp = arr[i];
		arr[i] = arr[l - i];
		arr[l - i] = temp;
	}
}
```	

**get firstChild**
```javascript
function getFirstChild(parentNode) {
	for (var i = 0, e;e = parentNode.childNodes[i++];) {
		if (e.nodeType === 1) {     // 1: Element node , 2: Attribute node , 3: Text node
			return e;
		} 
	}
	return null;   // when parentNode.childNodes is []
}
```

**deduplicate array**

> not respect IE  


* use indexOf

```javascript
function deDuplicate(arr) {
	var newArr = [];
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		if (newArr.indexOf(arr[i]) === -1) {
			newArr.push(arr[i]);
		}
	}
	return newArr
}
```

* use lastIndexOf

```javascript
Array.prototype.deDuplicate = function () {
	var len = this.length;
	for (var i = 0; i < len; i++) {
		if (this.lastIndexOf(this[i]) !== i) {
			this.splice(i, 1);
		}
	}
}
```



* replace indexOf with hash  by 玉伯 [array deduplication](https://github.com/lifesinger/blog/issues/113)

```javascript
function unique(arr) {
  var ret = []
  var hash = {}

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    var key = typeof(item) + item
    if (hash[key] !== 1) {
      ret.push(item)
      hash[key] = 1
    }
  }

  return ret
}
```

* replace indexOf with hash  by wintern

两个问题：

	* 因为哈希表没有解决冲突，所以没法区分toString相同的对象
	* 用hasOwnProperty,则不需要对IE6的Object.prototype上的名字特殊处理

```javascript
function unique(arr) {
  var ret = []
  var hash = {}

  for (var i = 0; i < arr.length; i++) {
    var item = arr[i]
    var key = typeof(item) + item
    if(!hash.hasOwnProperty(key))
      hash[key] = [];
    var found = false;
    for(var i = 0; i<hash[key].length; i++) {
      if(hash[key]===item) {
        found = true; break;
      }
    }
    if(!found) {
      hash[key].push(item);
      ret.push(item);
    }
  }

  return ret
}
....
```

* pure deduplicate  by 玉伯

```javascript
function deDuplicate(arr) {
  var obj = {};
  var ret = [];
  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i];
    if (obj[item] !== 1) {
      obj[item] = 1;
      ret.push(item);
    }
  }
  return ret;
}
```

**insertbefore and insertAfter**

* insertAfter

```javascript
function insertAfter (new, target) {
  var parent = target.parentNode;
  //target is the last child 
  if (parent.lastChild == target) {
    parent.appendChild(new);
  }
  else {
    var targetSibling = target.nextSibling;  //target's next sibling
    parent.insertBefore(new, targetSibling);
  }
}
```

**getNextElement**

```javascript
function getNextElement (node) {
  if (node.nodeType === 1) {
    return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
    }
  return null;
}
```

**indexOf**

```javascript
Array.prototype.indexOf = function (v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return i;
    else return -1;
  }
}
```

**getMaxOfArray**

```javascript
Array.prototype.getMaxOfArray = function (arr) {
  return Math.max.apply(null, arr); //
  }
```

**concatStr**

```javascript
function concatStr (separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
//test: concatStr(',', 1, 22, 34, 32, 55);
```
 
**Function.prototype.bind**

```javascript
Function.prototype.bind = function () {
  var args = arguments;
  var specified = arguments[0];
  var func = this;
  return function () {
    var slice = Array.prototype.slice;
    var arg = slice.call(args, 1);
    func.apply(specified, arg.concat(slice.call(arguments)));
    };
}
//make a good use of closure ,call and apply 
```

**Fibonacci**

> refer to the code of <<javascript good parts>> 

```javascript
function fibonacci () {
  var m = [0, 1, 1];
  var fib = function (n) {
    var result = m[n];
    if (typeof result !== 'number') {
      result = fib(n - 1) + fib(n - 2);
      m[n] = result; // store the result of calculated 
      }
    return result;
    };
  return fib;
}

//test
var f = fibnacci();
console.log(f(3)); // output is 2
```

**leftPad**

> bad, time complexity : O(N)

```javascript
function leftPad (str, len, ch) {
  str = String(str);
  /**
   * todo:  1. 判断str类型，建议弱类型直接转换成String，对异常情况过滤: [Object Object] [1,2] => 1,2 以及 function () {} 
   *        2. 判断ch类型  数字 0-9 字符串长度为1
   *        3. len >= str.length吧~~~
   */
  if (!(typeof ch === 'string' && ch.length === 1) && !(typeof ch === 'number' && ch >= 0 && ch <= 9))
    ch = ' ';
    while (str.length < len) {
      str = ch + str;
    }
    return str;
}
```


> good, the core algorithm is the same as that used by the `repeat` method of ES6  : String.prototype.repeat(count) 
> time complexity: O(logN)

```javascript
function leftPad (str, len, ch) {
  str = '' + str;
  if (!ch && ch !== 0 ) ch = ' ';
  
  var l = len - str.length;
  if (l <= 0) return str;
  
  var padStr = l & 1 ? ch : '';
  
  while (l >>= 1) {
    ch += ch;
    if (l & 1) {
      padStr += ch;
    }
  }
  return padStr + str;
}
```

**fetch the object inner closure**

> define an method for the prototype

```javascript
var o = (function () {
  var j = {
    name: 'otobelikethee',
    faith: 'Jesus'
  };
  return {
    run: function (k) {
      return j[k];
  }
  };
}());

//Object.defineProperty(obj, prop,descriptor)   //j.__proto__ = null  unefficient
Object.defineProperty(Object.prototype, 'self', {
  get: function () {
    return this;
  },
  configurable: true
});

console.log(o.run('self'));
```

**flatten the array**

> [1,2,[3,4],[5,[6,7,8]]]

```javascript
function flattenArray (arr) {
  if (!isArray(arr) || !arr.length) {
    return [];
  }
  return Array.prototype.concat.apply([], arr.map(function (ele) {
  return isArray(ele)?flattenArray(ele):ele;
  }));
}
function isArray (arr) {
  return Object.prototype.toString.call(arr).slice(8,-1).toLowerCase() === 'array';
}
//iterate the array if (isArray){...}else newArr.push(ele);
```

**trim**

```javascript
String.prototype.trim = function () {
  var regExp = new RegExp(/\s*/g);
  return this.replace(regExp, '');
}
```

**作用域、变量提升及函数提升**

```javascript
var num = 1;
function exec () {
num = 2;
return;
function num () {return 3;}
}
//test
exec();

var f = function (f) {
function f () {return 1;}
return f();
function f () {return 3;}
f = 2;
}
//test
f();
```

**m项和**

```javascript
function add (src) {
  var obj = src.split(' ');
  var n = parseInt(obj[0]);
  var m = parseInt(obj[1]);
  var result = 0;
  for (var i = 0; i < m; i++) {
        result += n;
        n = Math.sqrt(n);
      }
      return result.toFixed(2);
      }
```

