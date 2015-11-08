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


