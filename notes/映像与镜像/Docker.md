# Docker 镜像仓库

### 列表

| 名称                                               | 网址                               |
| -------------------------------------------------- | ---------------------------------- |
| [网易](https://hub-mirror.c.163.com	)           | https://hub-mirror.c.163.com       |
| [华中科技大学](https://docker.mirrors.ustc.edu.cn) | https://docker.mirrors.ustc.edu.cn |
| [官方国内镜像](https://registry.docker-cn.com/)    | https://registry.docker-cn.com/    |

### 配置方法

##### 修改配置文件加速站点

```shell
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["<your accelerate address>"]
}
```






### 相关网址
Docker 仓库镜像:  https://docs.docker.com/registry/recipes/mirror/#use-case-the-china-registry-mirror
