## FE

> [css居中完全指南](http://www.jianshu.com/p/61c431fd924a)
### 1. CSS实现水平垂直居中

* 块级元素水平居中

```
1. margin
margin: 0 auto;
```

* 行内元素水平居中

```
1. text-align
text-align: center;
```

* 块级元素垂直居中


* 行内元素垂直居中

```
1. table-cell + vertical-align
display: table-cell;
verticle-align: middle;
```

* 块级元素水平垂直居中

```
1. 绝对定位
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
margin: auto; //无限扩大，满足四个定位为0 

2. padding

<div class="wrap">
  <div class="content"></div>
</div>

@wrapWidth : 400px;

.wrap{
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: @wrapWidth;
  height: @wrapWidth;
  background-color: #ccc;
}

.content{
  @contentWidth : 100px;
  width: @contentWidth;
  height: @contentWidth;
  padding: (@wrapWidth - @contentWidth) / 2;
  background-color: #333;
  background-clip:content-box;
}

3. transform: translate(x,y)

<main>
  
  <div>
     I'm a block-level element of an unknown height and width, centered vertically within my parent.
  </div>
  
</main>

body {
  background: #f06d06;
  font-size: 80%;
  padding: 20px;
}

main {
  position: relative;
  background: white;
  height: 200px;
  width: 60%;
  margin: 0 auto;
  padding: 20px;
  resize: both;
  overflow: auto;
}

main div {
  background: black;
  color: white;
  width: 230px;
  transform: translate(50%,-50%);
  position: absolute;
  top: 50%;
  right: 50%;
  padding: 20px;
  resize: both;
  overflow: auto;
}
```

* 行内元素水平垂直居中

```
1. table-cell + vertical-align + text-align
display: table-cell;
vertical-align: middle;
text-align: center;

/*单行文本水平垂直居中*/
2. line-height + height + text-align
line-height: 20px;
height: 20px;
text-align: center;
```

