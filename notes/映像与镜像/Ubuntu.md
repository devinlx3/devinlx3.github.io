# Ubuntu 映像与镜像仓库

### 列表

| 映像                                                         | 备注     | 名称                                                     | 网址                                 |
| ------------------------------------------------------------ | -------- | -------------------------------------------------------- | ------------------------------------ |
| [官方映像](http://cdimage.ubuntu.com/ubuntu/releases/)       | 较新版本 |                                                          |                                      |
| [官方映像列表](https://wiki.ubuntu.com/FocalFossa/ReleaseNotes) | 较新版本 |                                                          |                                      |
| [阿里云](http://mirrors.aliyun.com/ubuntu-releases/)         | 较新版本 | [阿里云](http://maven.aliyun.com/ubuntu/)                | http://mirrors.aliyun.com            |
| [华为](https://mirrors.huaweicloud.com/ubuntu-releases/)     | 较新版本 | [华为](https://repo.huaweicloud.com/ubuntu/)             | https://repo.huaweicloud.com         |
| [网易](http://mirrors.163.com/ubuntu-releases/)              | 较新版本 | [网易](http://mirrors.163.com/ubuntu/)                   | http://mirrors.163.com               |
| [腾讯](http://mirrors.cloud.tencent.com/ubuntu-releases/)    | 较新版本 | [腾讯](http://mirrors.cloud.tencent.com/ubuntu/)         | http://mirrors.cloud.tencent.com     |
| [清华大学](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/) | 较新版本 | [清华大学](https://mirrors.tuna.tsinghua.edu.cn/ubuntu/) | https://mirrors.tuna.tsinghua.edu.cn |
| [兰州大学](http://mirror.lzu.edu.cn/ubuntu-releases/)        | 较新版本 | [兰州大学](http://mirror.lzu.edu.cn/ubuntu/)             | http://mirror.lzu.edu.cn             |
| [中国科技大学](http://mirrors.ustc.edu.cn/ubuntu-releases/)  | 较新版本 | [中国科技大学](https://mirrors.ustc.edu.cn/ubuntu/)      | https://mirrors.ustc.edu.cn          |
| -                                                            | -        | [上海交大](https://mirror.sjtu.edu.cn/ubuntu)            | https://mirror.sjtu.edu.cn           |
| [华中科技大学](http://mirrors.hust.edu.cn/ubuntu-releases/)  | 较新版本 | [华中科技大学](http://mirrors.hust.edu.cn/ubuntu/)       | http://mirrors.hust.edu.cn           |



### 使用说明

1、备份配置文件：

`sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak`

2、修改**sources.list**文件，将`http://archive.ubuntu.com`和`http://security.ubuntu.com`替换成`http://repo.huaweicloud.com`(可修改为上面的网址)，可以参考如下命令：

```
sudo sed -i \
-e "s@http://.*archive.ubuntu.com@http://repo.huaweicloud.com@g" \
-e "s@http://.*security.ubuntu.com@http://repo.huaweicloud.com@g" \
/etc/apt/sources.list
```

3、执行`apt-get update`更新索引



### 相关网址

Ubuntu官方地址：http://www.ubuntu.com/

Ubuntu论坛地址：http://ubuntuforums.org/

Ubuntu Wiki地址：https://wiki.ubuntu.com/

Ubuntu帮助地址：https://help.ubuntu.com/

Ubuntu邮件列表地址：http://www.ubuntu.com/support/community/mailinglists