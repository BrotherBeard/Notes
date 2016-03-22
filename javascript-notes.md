## javascript native methods' realization
1. **reverse array** 
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

2. **get firstChild**
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

3. **deduplicate array**

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

4. **insertbefore and insertAfter**

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

5. **getNextElement**

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

6. **indexOf**

```javascript
Array.prototype.indexOf = function (v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return i;
    else return -1;
  }
}
```

7. **getMaxOfArray**

```javascript
Array.prototype.getMaxOfArray = function (arr) {
  return Math.max.apply(null, arr); //
  }
```

8. **concatStr**

```javascript
function concatStr (separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
//test: concatStr(',', 1, 22, 34, 32, 55);
```

9. **Function.prototype.bind**

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

