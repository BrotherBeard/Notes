## FE

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

