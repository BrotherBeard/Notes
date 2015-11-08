## linux shell

* variable

a=12345  
${a}  
${#a}  
${a:0:3}  
${a:0:-2}  
${a:=rt} //if a is null or undefined,set a as "rt" then return "rt" else return ${a}  
${a:-rt} //if a is null or undefined,return "rt" but not set a as "rt"  
${a:+rt} // if a is not null,return "rt" else return null  

* array
array=(0 1 2)  
array[0]=1  
array[1]=2  
${array[0]} //1 array[0] is the first element of array ,of course it is a variable   

* key commands  

1. let   \*number calculate

2. eval   \*scan the sentence twice 
> name=huzi  
  eval $name=tt  
*explanation*: firstly scan the sentence and it will replate the $name with huzi,secondly it will realize that it is a regulay sentence and then execute it.

* tips: 
> pointer variable 
> array[][]

* special variable
$0 $num $# $? $$ $!

