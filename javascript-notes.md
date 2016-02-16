## javascript native methods' realization
1. **reverse array** 
```javascript
function reverseArray(array) {  
	var temp;	 
	var l = array.length - 1;
	for ( var i = 0; i < array.length / 2;  i++) {
		temp = array[i];
		array[i] = array[l - i];
		array[l - i] = temp;
	}
}
```	

2. **firstChild**
```javascript
function getFirstChild(parentNode) {
	for (var i = 0, e;e = parentNode.childNodes[i++];) {
		if (e.nodeType == 1) {
			return e;
		} else {
			return null;
		}
	}
}
