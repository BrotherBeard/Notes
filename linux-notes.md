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
> uniq -d file \/\**duplicate line*\*\/
  uniq -u file \/\**unduplicate line*\*\/

### join 
> join -t symbol file1 file2

### paste 
> paste -d symbol pas1 pas2 

### cut
> cut -d symbol -f num file  \/\**take the symbol as the separator,and cut out the num separator's field*\*\/

### diff
> diff file1 file2 \/\**< in file1 but not file2 > in file2 but not file1*\*\/

### sort
> sort -nr file
