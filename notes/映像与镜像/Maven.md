# Maven、Gradle 镜像仓库

### 列表

| 名称                                                         | 网址                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [阿里云](https://maven.aliyun.com/repository/public)         | http://mirrors.aliyun.com/debian/                            |
| [网易](http://mirrors.163.com/maven/repository/maven-public/) | http://mirrors.163.com/maven/repository/maven-public/        |
| [华为](https://mirrors.huaweicloud.com/repository/maven/)    | https://mirrors.huaweicloud.com/repository/maven/            |
| [腾讯](http://mirrors.cloud.tencent.com/nexus/repository/maven-public/) | http://mirrors.cloud.tencent.com/nexus/repository/maven-public/ |
| [Google](https://maven.google.com/)                          | https://maven.google.com/                                    |



### 配置方法

##### Maven 配置

打开 Maven 的配置文件(一般在maven安装目录的conf/settings.xml)，在`mirrors`标签中添加 mirror 子节点:

```xml
<mirror>
    <id>aliyun</id>
    <mirrorOf>*</mirrorOf>
    <name>aliyun public repository</name>
    <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

如果想使用其它代理仓库,可在`repositories`节点中加入对应的仓库使用地址。以使用spring代理仓为例：

```xml
<repository>
    <id>spring</id>
    <url>https://maven.aliyun.com/repository/spring</url>
    <releases>
        <enabled>true</enabled>
    </releases>
    <snapshots>
        <enabled>true</enabled>
    </snapshots>
</repository>
```

使用 **华为** Maven 中央仓库时，需要在servers节点增加一个server子节点，内容如下：

```xml
<server>
    <id>huaweicloud</id>
    <username>anonymous</username>
    <password>devcloud</password>
</server>
```

### Gradle 配置

在 build.gradle 文件中加入以下代码:

```groovy
allprojects {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/public/' }
        mavenLocal()
        mavenCentral()
    }
}
```

如果想使用 maven.aliyun.com 提供的其它代理仓，以使用 spring 仓为例，代码如下:

```groovy
allprojects {
    repositories {
        maven { url 'https://maven.aliyun.com/repository/public/' }
        maven { url 'https://maven.aliyun.com/repository/spring/'}
        mavenLocal()
        mavenCentral()
    }
}
```





### 相关网址

Maven官方地址：[https://maven.apache.org](https://maven.apache.org/)

Maven搜索地址：[http://mvnrepository.com](http://mvnrepository.com/)

Gradle官方地址：[https://gradle.org](https://gradle.org/)