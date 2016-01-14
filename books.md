
### 网页搜索部推荐书目

【小提示】：
	Linux平台上的基础开发工具是每一位Baiduer必须具备的技能，你可以通过任何资料了解Linux上的vi、gcc、makefile、gdb等工具的使用方法进而熟练掌握它们，这样进入公司后就不会感到环境那么陌生了；你也需要了解grep/sed/awk等各种文本文件处理工具，这样你离一个真正的Baiduer就更近了。
	下面是工程师经过投票表决选出来最为重要的资料，如果有时间，可以好好读读，预祝你学习愉快，^_^

1. 必读资料 

1.1 搜索引擎介绍性Paper/书籍 

Arvind Arasu， Junghoo Cho， Hector Garcia-Molina， Andreas Paepcke，Sriram Raghavan, 《Search the Web》, http://citeseer.ist.psu.edu/527114.html 以及该paper的参考文献：8，11，22，38 
Junghoo Cho 的一些相关论文，重点是他的博士论文，请参考：http://oak.cs.ucla.edu/~cho/ 
李晓明，闫宏飞，王继民 《搜索引擎原理、技术与系统》 

1.2 编程书籍 

《code complete》，中文名《代码大全》。 

此书目前一共出版了两版，建议以一版作为精读，另一版作为对比阅读。 

2. 选读资料 

2.1 数据挖掘的基础方法和思想 

可以参考：《Introduction to Data Mining》，中文名《数据挖掘导论》 

[on sale](http://www.china-pub.com/computers/common/info.asp?id=30045)

2.2 自然语言处理 

可以参考：《Foundations of Statistical Natural Language Processing》中文名《统计自然语言处理基础》

[on sale](http://www.china-pub.com/computers/common/info.asp?id=22710)

3. 需要学习的技能/工具语言/平台 

3.1 linux使用和shell编程 

[《sed与awk》](http://www.china-pub.com/computers/common/info.asp?id=13255)

也重点推荐Mendel Cooper的《高级Bash脚本编程指南》

Linux编程
	    
推荐参考：《Beginning Linux Programming》，这是入门的好书

3.2 	Unix下的网络编程 

Richard Stevens, 《TCP/IP 详解》 
Richard Stevens, Unix Network Programming，中文名《Unix网络编程》 
Richard Stevens, Advanced Programming in the Unix Environment，中文名《Unix环境高级编程》 

建议的学习方式： 

```
1、学习《UNIX环境高级编程》 
2、结合《TCP/IP 详解》第一卷的知识，用《Unix网络编程》第一卷提到的方法和工具，进行学习和练习，多写点代码，多用 tcpdump 等工具观察实际的网络数据流。 
```

4. C语言和算法

《The C Programming Language》

《Data Structures and algorithm analysis in C》

《算法导论》：

```
学算法不错的入门书,涵盖面比较广,书中有很多证明的公式,让人知其然也知其所以然.算法都是用伪代码表示的,非常容易看懂,现在有中文版了.
```

《算法程序设计与艺术》

```
Knuth的书，比较难看懂，其中对排序和搜索讲得极为透彻，推荐做检索的同学看一看。
```

《POSIX多线程程序设计》

```
（《Programming with POSIX threads》, Addison-Wesley Publish）作为讲解POSIX Thread中不可多得的好书,这本书的价值远远大于一般的POSIX手册.网上有很多介绍POSIX的资料,但是都不是很全面,而这本书很好的弥补了这个缺陷。

推荐用途:
1)手册;
2)多线程入门;
3)多线程模型参考。
```

计算机基础知识

OSI七层模型

应用层主要协议

Socket通信

 
coding算法类基础知识

common:
链表,
树,
图

DB:
sql

在IT界中公司对JavaScript开发者的要求还是比较高的，但是如果JavaScript开发者的技能和经验都达到了一定的级别，那他们还是很容易跳到优秀的公司的，当然薪水就更不是问题了。但是在面试之前，面试准备也应该足够的充分，毕竟不是每个优秀的开发者都能在短时间内表现自己。在这篇文章中，我将会列出5个常见的前端开发面试题。看到这里你证明你一定是个程序员或是HR了，不防把文章看完，了解一下自己还有什么不足之处，有什么问题希望大家可以在留言中交流。

问题1: 作用域

看一下下面的代码：

```javascript
(function() {   
	var a = b = 5;
})(); 
console.log(b);
```
结果会输出什么？ 
答案：
5

这个问题考查的要点是两个不同的作用域，'a'被var声明成了一个局部变量，但是'b'实际上没有被定义，所以它是一个全局变量。

这个问题还牵扯到另个一个比较重要的问题，就是strict mode，如果你选择了strict mode，上面的代码就会报Uncaught ReferenceError，因为b没有被定义，它可以帮你检查出代码的一些问题：

```javascript
(function() {   
	'use strict';   
	var a = window.b = 5;
	})(); 
console.log(b);
```
问题2: 创建“native”方法

写一个重复打印字符串对象的方法，输入一个整数，这个整数代表重复打印的字数，比如：

console.log('hello'.repeatify(3));

这样会打印出hellohellohello。
答案：

其中一种实现方法是这样： 

```javascript
String.prototype.repeatify = String.prototype.repeatify || function(times) {   var str = '';    for (var i = 0; i < times; i++) {      str += this;   }    return str;};
```

这个问题考查的是开发者对JavaScript继承和prototype属性的了解程度。
Question 3: Hoisting

下面这段代码的输出结果是什么？

function test() {   console.log(a);   console.log(foo());       var a = 1;   function foo() {      return 2;   }}

test();

答案

undefined和2。

上面的代码和下面这段是等效的：

```javascript
function test() {   var a;   function foo() {      return 2;   }    console.log(a);   console.log(foo());       a = 1;} test();
```

问题4: 在JavaScript中如何执行

通过下面的代码给出结果，解释一下你的答案：

```javascript
var fullname = 'John Doe';var obj = {   fullname: 'Colin Ihrig',   prop: {      fullname: 'Aurelio De Rosa',      getFullname: function() {         return this.fullname;      }   }}; console.log(obj.prop.getFullname()); var test = obj.prop.getFullname; console.log(test());
```
答案：

 Aurelio De Rosa 和John Doe。
问题5: call() 和 apply()

解决前面的问题之后让最后一个console.log()输出Aurelio De Rosa.
答案：

这个问题在于call()还是apply()。 如果你不知道它们之间的区别，我建设你先读一读 What’s the difference between function.call and function.apply? 下面这行代码我使用了call()，但是这个情况下apply()也会产生同样的结果：

console.log(test.call(obj.prop));

进程与线程的区别，怎么理解进程，线程之间是如何隔离栈地址空间，如何共享堆地址空间
