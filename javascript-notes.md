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
```
