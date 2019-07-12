# Docker
## test

```
方法一: Linux中修改/etc/docker/daemon.json
{
"registry-mirrors": ["https://docker.mirrors.ustc.edu.cn", "https://hub-mirror.c.163.com"]
}
方法二: 通过添加启动参数
$ dockerd --registry-mirror=https://registry.docker-cn.com
```