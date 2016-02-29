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

3. **deduplicate array***

> not respect IE  

```javascript
//1. use indexOf
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

//2. use lastIndexOf
Array.prototype.deDuplicate = function () {
	var len = this.length;
	for (var i = 0; i < len; i++) {
		if (this.lastIndexOf(this[i]) !== i) {
			this.splice(i, 1);
		}
	}
}

(array deduplication)[https://github.com/lifesinger/blog/issues/113]
//3.  replace indexOf with hash  by 玉伯
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
//4. replace indexOf with hash  by wintern
两个问题：
1.因为哈希表没有解决冲突，所以没法区分toString相同的对象
2.用hasOwnProperty,则不需要对IE6的Object.prototype上的名字特殊处理

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

//4. pure deduplicate  by 玉伯
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
