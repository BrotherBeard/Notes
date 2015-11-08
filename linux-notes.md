# Linux notes

### scp  ( copy files between two linux server. )
* local-->server

> 
`scp local_file user@host:remote_dir/remote_filename`  
`scp -r local_dir user@host:remote_dir`	

* server-->local

>
`scp user@host:remote_dir/remote_file /local/local_dir`  
`scp -r user@host:/.../remote_dir /local/local_dir/`

### /dev/null

/dev/null is a special file in linux, any output data(streams) will be deleted transparently

### redirection

file type           |        file symbol              |  default action
--------------------------------------------------------------------------------------
stdin(标准输入文件) |                             0   | unix program read from it defaultly

