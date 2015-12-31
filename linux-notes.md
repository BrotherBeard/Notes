# Linux notes

### 1. scp  ( copy files between two linux server. )
* local-->server

> 
`scp local_file user@host:remote_dir/remote_filename`  
`scp -r local_dir user@host:remote_dir`	

* server-->local

>
`scp user@host:remote_dir/remote_file /local/local_dir`  
`scp -r user@host:/.../remote_dir /local/local_dir/`

### 2. /dev/null

/dev/null is a special file in linux, any output data(streams) will be deleted transparently

### 3. redirection

file type           |        file symbol              |  default action
--------------------|---------------------------------|------------------------------------
stdin(标准输入文件) |               0                 | unix program read from it defaultly
stdout(标准输出文件)|               1                 | unix program write to it defaultly
stderr(标准错误文件)|               2                 | unix program write error mesgs to it defaultly

> ### redirection command lists
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
> \*\/used in pipe,it will take the output list as the input args and execute the command, every arg,execute\*\/
pipe usage: 
1) ls | wc -l
2) ls | xargs wc -l
3) find . -name tt | xargs wc -l

### uniq
> uniq -d file \/\**duplicate line*\*\/  -D //输出多行
  uniq -u file \/\**unduplicate line*\*\/  mysql distinct
  uniq -s num
  uniq -w 
  uniq -f --skip-fields
  uniq -i --ignore-case

### join 
> join -t symbol file1 file2

### paste 
> paste -d symbol pas1 pas2
> ls | paste -d ":" - - - -      //输出结果按分号进行分隔，每行四列 
> paste -s pas1 pas2             // 列输出转为行输出

### cut
> cut -d symbol -f num file  \/\**take the symbol as the separator,and cut out the num separator's field*\*\/

### diff
> diff file1 file2 \/\**< in file1 but not file2 > in file2 but not file1*\*\/

### sort
> sort -nr file
> sort -t '' -k1 -k2 file  /\*sort by k 1 ,if field 1 is same then sort by k 2\*/
> sort -t $'\t' /\*seperated by tab multi-character seperator.\*/
> sort -nk2 -u file  /\* -u can only follow -k field.\*/
> sort -k 1.1,1.1 file  /\*sort by the first character of k1.\*/
> sort .....  -o output_file  is different form sort ..... > output_file   /\* redirection will cause error\*/

### grep
> grep abc file
> grep -o abc file /\*only output the part matched\*/ 
> grep -E "/reg/" file /\*正则匹配\*/
> grep -v "xxx" file  //verbose
> grep -c "xxx" file //count of matches
> grep "xxx" file --color=auto
>grep -r "xxxx" . /\*recursive match\*/

### column :used to format its output
> column -s '|' -t /\*replace the '|' with \t . -s specific the delimiter '|' \*/
> column -t /\*columns are delimited with whitespace by default,so it can be replaced with '\t' \*/

###  cut 
> cut -b 3   //byte
> cut -b -3     // bytes beteween 0 and 3
> cut -b 3-5,7  //bytes between 3 and 5 ,the seventh byte
> cut -c 3  //character
> cut -d ":" -f 1   -d: delimiter -f : field
### split
> split [-b|-l]   //bytes or line
> split -a suffix length
> split -d //number
> split -a 2 -d -l 100 file _ //the last argument is prefix specifiction

### awk: time function
> mktime(YYYY MM DD HH MM SS) 
> strftime([format [,timestamp])
> systime() fetch timestamp from 1970-1-1 to now

### awk : fetch the external variable
* normal
> test='awk code'
> echo | awk '{print test}' test="$test"
* BEGIN block
> test='awk code'
> echo | awk -v test="$test" 'BEGIN{print test}'
* ENVIRON Variable
> awk 'BEGIN{for (i in ENVIRON) {print i"="ENVIRON[i];}}'    /\* use the variable of awk :ENVIRON\*/

### awk : String function
* sub
> usage: sub函数默认匹配整条记录，最大，最靠左边的子字符串，并用替换字符串替换这些字符串。每行中只发生在第一次匹配的时候。  
> sub(regular expression, substitution string)
> sub(regular expression, substitution string, target string)

> example:
> awk '{sub(/test/, "mytest")};print}' file  
> awk '{sub(/test/, "mytest",$1);print}' file

* gsub
> usage: gsub在整个文档中进行匹配

* index
> usage: index函数返回子字符串第一次被匹配的位置 index(string, target string)  
> awk '{print index("test", "mytest")}' file

* length
> usage: length返回记录的字符数

* substr
> usage: substr函数返回从位置1开始的子字符串，如果制定长度超过实际长度，则返回整个字符串  
> substr(string,starting position)  
> substr(string,starting position,length of string)

* match
> usage: match函数返回在字符串中正则表达式位置的索引，找不到则返回0，内建变量：RSTART：子字符串开始位置  RLENGTH：为到字符串结尾的字符个数  
> match(string, regular expression)  
> awk '{start=match("this is test",/[a-z]+$/);print start,RSTART,RLENGTH}'  

* split
> usage: split函数按指定的分隔符把字符串分割为数组，如无分隔符，则按当前的FS进行分割
> split(string, array [, field separator])  
 
* awk 赋值与BEGIN PROCESS END

> awk 'BEGIN {...}{...}END {...}' file a=1  //END操作之前
> awk 'BEGIN {...}{...}END {...}' a=1 file  //正常处理之前
> awk 'BEGIN {...}{...}END {...}' file_1 a=1 file_2  //同上
> awk -v a=1 'BEGIN {...}{...}END {...}' file   //BEGIN操作之前

### eval  scan twice and explain the shell variable
> eval命令将会首先扫描命令行进行所有的替换，然后再执行命令。该命令使用于那些一次扫描无法实现其功能的变量。该命令对变量进行两次扫描。这些需要进行两次扫描的变量有时候被称为复杂变量

### shopt  //shell user operation options
> shopt [-s|-u]
  huponexit off etc.

