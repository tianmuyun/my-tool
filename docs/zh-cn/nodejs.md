# Node.js安装

## 一、下载 Node.js

下载地址：[Node.js](https://nodejs.org/zh-cn/download/prebuilt-binaries)

选择 Windows 预构建二进制文件(.zip)版本进行下载。

## 二、配置 npm 安装目录

在解压之后的文件路径下，创建两个文件夹 node_global 和 node_cache 。

> node_global : npm 全局安装位置
>
> node_cache : npm 缓存路径

## 三、配置环境变量

将 node.exe 所在目录和 node_global 加入到环境变量中。

创建一个新的系统变量名为：`NODE_PATH`，变量值为 Node.js 的安装目录。

编辑系统变量中的 Path 变量，将`%NODE_PATH%`和`%NODE_PATH%\node_global`加入到变量中。

## 四、检验和测试

到这里就安装完成了，可以在 CMD 命令行中用`npm -v`和`node -v`测试一下是否按照成功。

## 五、配置全局安装和缓存路径

配置.npmrc 文件，一般都在放在 C:/Users/<用户名>/.npmrc

将下面的代码添加到.npmrc 文件中，<NODE_PATH>为 Node.js 的安装目录。

```ini
cache=<NODE_PATH>\node_cache
prefix=<NODE_PATH>\node_global
```

通过`npm config ls`检查 npm 的配置信息。

## 六、切换 npm 源镜像


```bash
# 查看当前的镜像源
npm config get registry

# 切换淘宝镜像源
npm config set registry https://registry.npmmirror.com

# 返回 npm 官方原始镜像
npm config set registry https://registry.npmjs.org/
```
