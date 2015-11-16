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
> sort -nk2 -u file  /\* -u can only follow -k field.\*/
> sort -k 1.1,1.1 file  /\*sort by the first character of k1.\*/
> sort .....  -o output_file  is different form sort ..... > output_file   /\* redirection will cause error\*/

### grep
> grep abc file
> grep -o abc file /\*only output the part matched\*/ 
> grep -E "/reg/" file /\*正则匹配\*/
> grep -v "xxx" file  //verbose
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

### awk: time function
> mktime(YYYY MM DD HH MM SS) 
> strftime([format [,timestamp])
> systime() fetch timestamp from 1970-1-1 to now
