# 使用 Docker 尝试 Demo

## 启动服务

在 Docker 中尝试 demo，可以使用以下命令启动服务：

```sh
docker compose up -d --build --scale grpc-server=3
```

## 动态扩展

如果需要动态扩展实例数量，可以使用以下命令：

```sh
docker compose up -d --scale grpc-server=<n>
```

其中 `<n>` 是你想要变成的实例数量。

## 测试方法

测试方法如下：

访问 [http://localhost:3000/user/2](http://localhost:3000/user/2)，观察返回值中的 `serverIp` 可以知道本次请求在哪一个 server。

## 本地调试

如果在本地调试，请使用 `pnpm`：

```sh
pnpm install
pnpm start:grpc
pnpm start:http
```