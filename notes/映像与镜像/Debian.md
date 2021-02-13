# Debian 映像与镜像仓库

### 列表

| 映像                                                         | 备注           | 镜像                                                     | 镜像源地址                           |
| ------------------------------------------------------------ | -------------- | -------------------------------------------------------- | ------------------------------------ |
| [官方映像](https://cdimage.debian.org/debian-cd/current/amd64/iso-dvd/) | 稳定版本       |                                                          |                                      |
| [官方映像列表](https://cdimage.debian.org/cdimage/archive/)  | 不包含最新版本 |                                                          |                                      |
| [阿里云](http://mirrors.aliyun.com/debian-cd/current/arm64/iso-dvd/) | 稳定版本       | [阿里云](http://maven.aliyun.com/debian/)                | http://mirrors.aliyun.com            |
| [华为](https://repo.huaweicloud.com/debian-cd/)              | 比较全         | [华为](https://repo.huaweicloud.com/debian/)             | https://repo.huaweicloud.com         |
| [网易](http://mirrors.163.com/debian-cd/)                    | 较新版本       | [网易](http://mirrors.163.com/debian/)                   | http://mirrors.163.com               |
| [腾讯](http://mirrors.cloud.tencent.com/debian-cd/)          | 稳定版本       | [腾讯](http://mirrors.cloud.tencent.com/debian/)         | http://mirrors.cloud.tencent.com     |
| [清华大学](https://mirrors.tuna.tsinghua.edu.cn/debian-cd/current/arm64/iso-dvd/) | 稳定版本       | [清华大学](https://mirrors.tuna.tsinghua.edu.cn/debian/) | https://mirrors.tuna.tsinghua.edu.cn |
| [兰州大学](http://mirror.lzu.edu.cn/debian-cd/)              | 稳定版本       | [兰州大学](http://mirror.lzu.edu.cn/debian/)             | http://mirror.lzu.edu.cn             |
| [中国科技大学](https://mirrors.ustc.edu.cn/debian-cd/current/arm64/iso-dvd/) | 稳定版本       | [中国科技大学](https://mirrors.ustc.edu.cn/debian/)      | https://mirrors.ustc.edu.cn          |
| [上海交大](https://mirror.sjtu.edu.cn/debian-cd/)            | 稳定版本       | [上海交大](https://mirror.sjtu.edu.cn/debian)            | https://mirror.sjtu.edu.cn           |



### 使用说明

1、若需要使用`https`源，则需要执行`sudo apt-get install apt-transport-https ca-certificates`安装https源

2、备份配置文件：

`sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak`

3、修改**sources.list**文件，将`http://deb.debian.org`替换成`https://repo.huaweicloud.com`，同时也将`http://security.debian.org`替换成`https://repo.huaweicloud.com` (可修改为上面的网址)，可以参考如下命令：

```
sudo sed -i \
-e "s@http://deb.debian.org@https://repo.huaweicloud.com@g" \
-e "s@http://security.debian.org@https://repo.huaweicloud.com@g" \
/etc/apt/sources.list
```

4、执行`apt-get update`更新索引



### 相关网址

Debian官网地址：http://www.debian.org/

Debian-Security官网地址：https://www.debian.org/security/

Debian安全追踪网址：https://security-tracker.debian.org/tracker/

Debian邮件列表地址：http://www.debian.org/support#mail_lists

Debian文档地址：http://www.debian.org/doc/

Debian Wiki地址：http://wiki.debian.org/

Debian镜像列表地址：http://www.debian.org/mirror/list