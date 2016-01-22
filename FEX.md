## FE

> [css居中完全指南](http://www.jianshu.com/p/61c431fd924a)
> [css学习参考](http://learn.shayhowe.com/advanced-html-css/css-transforms/)
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

1. display属性有哪些可取值，分别是什么含意？
   回答：none block inline inline-block 
2. 浏览器渲染原理
   回答：较为浅显，只回答出渲染dom树和CSS树。
3. 常见的http状态码
   回答: 除300的含义未答出，其他都正确。
4. 文件上传
   回答：用form表单和input做文件上传；异步的话用ajax结合file。
5. 对jquery、bootstrap、angularjs的理解
   回答：平时主要用原生js写，用过jquery和bootstrap，不了解angular。
6. call与apply的作用及区别    
   回答正确。
7. 写一个数组去重的函数
   回答正确。1次循环。新建一个object，将数组中的值作为key，依次遍历判断是否undefined，分别传值到新object。
8. inline、block、inline-block的区别？
   回答正确。
9. 实现一个块级元素水平垂直居中
   回答正确。

1. 闭包 （基本正确）
2. jquery、seajs、backbone.js、underscore.js （看过源码，了解基本原理）
3. call与apply的作用及区别  （部分正确）
4. 浏览器渲染原理 （基本正确）
5. repaint、reflow （基本正确）
6. 性能优化 （部分正确）
7. H5应用 canvas 、拖拽（部分正确）
8. 使用过前端模板artTemplate，主要解决的事情xxx
9. 简历中的教育软件H5化是什么意思 （理解一般）


1. 什么时候接触前端？大二开始 
2. 学习并开发游戏引擎有多久时间？从去年开始 12月开始  主要看老师写的一个引擎
3. 最有成就的前端产出是什么？ 自己的JS框架 类似jquery，完成了选择器 类型判断 多库并存，为了提升技术，自己的目标是做前端架构师
4. seajs vs requrejs  区别？ 部分正确
5. 模块重复加载的问题？不正确
6. JS 闭包？ 正确 
7. JS 组件？图片循环轮播组件？ 只答出overflow：hidden，不知道如何循环轮播
8. call apply 作用及区别？ 回答出 部分继承
9. repaint和reflow？ 不知道
10. 写一个数组去重的函数？ 回答出 双重遍历
11. display属性值？ 部分正确
12. 块级元素水平垂直居中？ 不正确

//inline-block
将对象呈递为内联对象，但是对象的内容作为块对象呈递。旁边的内联对象会被呈递在同一行内，允许空格。
