## Linux notes

### scp  ( cpoy files btween two linux server. )
* local-->server
> copy file
`scp local_file user@host:remote_dir/remote_filename
> copy files recursively
`scp -r local_dir user@host:remote_dir`	
* server-->local
> copy file
`scp user@host:remote_dir/remote_file /local/local_dir`
> copy files recursively
`scp -r user@host:/.../remote_dir` /local/local_dir/`


