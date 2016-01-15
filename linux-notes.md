# Linux notes

### 1. scp  ( copy files between two linux server. )
* local-->server

```
scp local_file user@host:remote_dir/remote_filename  
scp -r local_dir user@host:remote_dir
```

* server-->local

```
scp user@host:remote_dir/remote_file /local/local_dir
scp -r user@host:/.../remote_dir /local/local_dir/
```



### 3. redirection

file type           |        file symbol              |  default action
--------------------|---------------------------------|------------------------------------
stdin(标准输入文件) |               0                 | unix program read from it defaultly
stdout(标准输出文件)|               1                 | unix program write to it defaultly
stderr(标准错误文件)|               2                 | unix program write error mesgs to it defaultly


#### 3.1 redirection command lists

command        | instructions
---------------|-------------
command > file | redirect output into file 
command < file | redirect input into file
command >> file| redirect append output into file
n > file       | the same as above
n >> file      | the same as above
n>&m           | merge the output file of n and m 
n<&m           | merge the input file if n and m 


### xargs

```
1. used in pipe,it will take the output list as the input args and execute the command, every arg,execute

pipe usage: 
1) ls | wc -l
2) ls | xargs wc -l
3) find . -name tt | xargs wc -l
```

### uniq

```
uniq -d file duplicate line  -D //输出多行
uniq -u file unduplicate line  // like mysql distinct
uniq -s num
uniq -w 
uniq -f --skip-fields
uniq -i --ignore-case
```

### join 

`join -t symbol file1 file2`

### paste 

```
paste -d symbol pas1 pas2
ls | paste -d ":" - - - -      //输出结果按分号进行分隔，每行四列 
paste -s pas1 pas2             // 列输出转为行输出
```

### cut

```
cut -d symbol -f num file  //take the symbol as the separator,and cut out the num separator's field
```

### diff

```
diff file1 file2    < in file1 but not file2 > in file2 but not file1
```

### sort

```
 sort -nr file
 sort -t '' -k1 -k2 file  //sort by k 1 ,if field 1 is same then sort by k 2
 sort -t $'\t' //seperated by tab multi-character seperator
 sort -nk2 -u file  //-u can only follow -k field
 sort -k 1.1,1.1 file  //sort by the first character of k1
 sort .....  -o output_file  //it is different form sort ..... > output_file   //redirection will cause error
```

### grep

```
grep abc file
grep -o abc file //only output the part matched
grep -E "/reg/" file //正则匹配
grep -v "xxx" file  //verbose
grep -c "xxx" file //count of matches
grep "xxx" file --color=auto
grep -r "xxxx" . //recursive match
```

### column :used to format its output

```
column -s '|' -t  //replace the '|' with \t . -s specific the delimiter '|' 
column -t       //columns are delimited with whitespace by default,so it can be replaced with '\t' 
```

###  cut 

```
cut -b 3   //byte
cut -b -3     // bytes beteween 0 and 3
cut -b 3-5,7  //bytes between 3 and 5 ,the seventh byte
cut -c 3  //character
cut -d ":" -f 1   -d: delimiter -f : field
```

### split

```
split [-b|-l]   //bytes or line
split -a  arg   //suffix length
split -d  arg   //decimal
split -a 2 -d -l 100 file _  //the last argument is prefix specifiction
```

### shopt  

```
1. shell user operation options

  shopt [-s|-u]
  
  x. huponexit off etc.
```

### ` (反引号)

```
allow to assign the output of command to specific variable
```

### math calculation

#### 1. expr

```
  expr 1+5
  expr 1 \* 2
  ```
  
#### 2. $[ operation ]  //assign the result of operation to the specific variable

```
  var=3
  var1=$[$var * 2]
  echo $var1
```

#### 3. floating calculation
   
```   
   bg: the second cannot deal with the foat type well
   1. bc command

    bc -q  //ignore the welcome infomation
    scale=4  // 4 means the length of decimal
    i.e: bc -q
         3.44 / 5
         0
         scale=4
         3.44 / 5
         .6880
         quit
   2. use bc in shell-script

    `echo "options;expression" | bc`
    var1=`echo "scale=4; 3.44 / 5" | bc`
    echo the answer is $var1
```

### shell check the exit status

> $? //save the exit status of last command's result
> 0~255

status|description
------|-----------
0     | success exit
1     | unknown error  //illegal argument
2     |  shell command
126   | permition denied
127   | unknown shell command

### awk: time function

```
mktime(YYYY MM DD HH MM SS) 
strftime([format [,timestamp])
systime() fetch timestamp from 1970-1-1 to now
```

### awk : fetch the external variable

```
1. normal

test='awk code'
echo | awk '{print test}' test="$test"

2. BEGIN block

test='awk code'
echo | awk -v test="$test" 'BEGIN{print test}'

3. ENVIRON Variable

awk 'BEGIN{for (i in ENVIRON) {print i"="ENVIRON[i];}}'    //use the variable of awk :ENVIRON
```

### awk : String function

* sub

```
usage: sub函数默认匹配整条记录，最大，最靠左边的子字符串，并用替换字符串替换这些字符串。每行中只发生在第一次匹配的时候。  
sub(regular expression, substitution string)
sub(regular expression, substitution string, target string)

2. example:
awk '{sub(/test/, "mytest")};print}' file  
awk '{sub(/test/, "mytest",$1);print}' file
```

* gsub

```
usage: gsub在整个文档中进行匹配
```

* index

```
usage: index函数返回子字符串第一次被匹配的位置 index(string, target string)  
awk '{print index("test", "mytest")}' file
```

* length

``` 
usage: length返回记录的字符数
```

* substr

```
usage: substr函数返回从位置1开始的子字符串，如果制定长度超过实际长度，则返回整个字符串  
substr(string,starting position)  
substr(string,starting position,length of string)
```

* match

```
usage: match函数返回在字符串中正则表达式位置的索引，找不到则返回0，内建变量：RSTART：子字符串开始位置  RLENGTH：为到字符串结尾的字符个数  
match(string, regular expression)  
awk '{start=match("this is test",/[a-z]+$/);print start,RSTART,RLENGTH}'  
```

* split

```
usage: split函数按指定的分隔符把字符串分割为数组，如无分隔符，则按当前的FS进行分割
split(string, array [, field separator])  
```

* awk 

```
1. 赋值与BEGIN PROCESS END

awk 'BEGIN {...}{...}END {...}' file a=1  //END操作之前
awk 'BEGIN {...}{...}END {...}' a=1 file  //正常处理之前
awk 'BEGIN {...}{...}END {...}' file_1 a=1 file_2  //同上
awk -v a=1 'BEGIN {...}{...}END {...}' file   //BEGIN操作之前
```


### eval  

```
1. scan twice and explain the shell variable

eval命令将会首先扫描命令行进行所有的替换，然后再执行命令。该命令使用于那些一次扫描无法实现其功能的变量。该命令对变量进行两次扫描。这些需要进行两次扫描的变量有时候被称为复杂变量
```

### /dev/null

```
/dev/null is a special file in linux, any output data(streams) will be deleted transparently
```
### shell glob and local variable 

```
Bash在实现pipeline(管道|)时会发起两个subshell(子shell)来运行|两边的命令，对于系统来说就是发起两个childprocess(子进程） 

subshell:
1) 调用脚本
2) 使用外部命令
3) 管道
4) ()
5) 放入后台的函数
```

> test1.sh

```shell
#!/bin/sh

i=0
for file in "$@"; do
        while read line; do
                let i++
        done < $file
done
echo $i
```
> test2.sh

```shell

#!/bin/sh

i=0
for file in "$@"; do
        cat $file | while read line; do
                let i++
        done
done
echo $i
``` 

shell符号的使用

1. $() and `` command substitution
2. $[] and (())  math calculation and comparation
3. () subshell 
4. [] and [[]]  string comparation

