# CentOS 映像与镜像仓库

### 列表

| 映像(CentOS8的iso)                                           | 备注       | 镜像                                                     | 镜像源网址                           |
| ------------------------------------------------------------ | ---------- | -------------------------------------------------------- | ------------------------------------ |
| [官方映像 ISO](https://vault.centos.org/8.0.1905/isos/x86_64/) | 包含老版本 | -                                                        | http://mirror.centos.org             |
| [官方云镜像 ISO](http://cloud.centos.org/centos/8/x86_64/images/) | 没有老版本 | -                                                        | http://mirror.centos.org             |
| [官方镜像列表](http://mirrors.huaweicloud.com/centos/8/isos/x86_64/) |            | -                                                        | -                                    |
| [阿里云 ISO](http://mirrors.aliyun.com/centos/8/isos/x86_64/) |            | [阿里云](http://maven.aliyun.com/centos/)                | http://mirrors.aliyun.com            |
| [华为](http://repo.huaweicloud.com/centos/)                  |            | [华为](https://repo.huaweicloud.com/centos/)             | https://repo.huaweicloud.com         |
| [网易](http://mirrors.163.com/centos/8/isos/x86_64/)         |            | [网易](http://mirrors.163.com/centos/)                   | http://mirrors.163.com               |
| [腾讯](https://mirrors.cloud.tencent.com/centos/8/isos/x86_64/) |            | [腾讯](http://mirrors.cloud.tencent.com/centos/)         | http://mirrors.cloud.tencent.com     |
| [清华大学](https://mirrors.tuna.tsinghua.edu.cn/centos/8/isos/x86_64/) |            | [清华大学](https://mirrors.tuna.tsinghua.edu.cn/centos/) | https://mirrors.tuna.tsinghua.edu.cn |
| [兰州大学](http://mirror.lzu.edu.cn/centos/)                 |            | [兰州大学](http://mirror.lzu.edu.cn/centos/)             | http://mirror.lzu.edu.cn             |
| [中国科技大学](https://mirrors.ustc.edu.cn/centos/8/isos/x86_64/) |            | [中国科技大学](https://mirrors.ustc.edu.cn/centos/)      | https://mirrors.ustc.edu.cn          |
| [上海交大](https://mirror.sjtu.edu.cn/centos/8/isos/x86_64/) |            | [上海交大](https://mirror.sjtu.edu.cn/centos)            | https://mirror.sjtu.edu.cn           |
| [Liquid Telecom](http://centos.mirror.liquidtelecom.com/8/isos/x86_64/) |            | -                                                        | -                                    |
| [常州贝特康姆软件技术有限公司](http://centos.bitcomm.cn/centos/8/isos/x86_64/) |            | -                                                        | -                                    |
| [公云PubYun（母公司为贝特康姆）](http://mirrors.pubyun.com/centos/8/isos/x86_64/) |            | -                                                        | -                                    |



### 使用说明

1、备份配置文件：

`sudo cp -a /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak`

2、修改**CentOS-Base.repo**文件，取消**baseurl**开头的行的注释，并增加**mirrorlist**开头的行的注释。将文件中的`http://mirror.centos.org`替换成`https://repo.huaweicloud.com`(可修改为上面的网址)，可以参考如下命令：

```
sudo sed -i \
-e "s/#baseurl/baseurl/g" \
-e "s/mirrorlist=http/#mirrorlist=http/g" \
-e "s@http://mirror.centos.org@https://repo.huaweicloud.com@g" \
/etc/yum.repos.d/CentOS-Base.repo
```

3、执行`yum clean all`清除原有yum缓存。

4、执行`yum makecache`（刷新缓存）或者`yum repolist all`（查看所有配置可以使用的文件，会自动刷新缓存）。

注意其中的`*`通配符，如果只需要替换一些文件中的源，请自行增删。

注意，如果需要启用其中一些 repo，需要将其中的 `enabled=0` 改为 `enabled=1`。

**※ 提醒：** CentOS 6 及以下版本已被官网源下线, 若需使用, 请参考 CentOS-Vault 进行配置.



### 相关网址

CentOS官方地址：http://www.centos.org/

CentOS邮件列表地址：http://www.centos.org/modules/tinycontent/index.php?id=16

CentOS论坛地址：http://www.centos.org/modules/newbb/

CentOS文档地址：http://www.centos.org/docs/

CentOS Wiki地址：http://wiki.centos.org/