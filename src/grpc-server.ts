import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ProtoGrpcType } from "./proto/user";
import { networkInterfaces } from "os";

const PROTO_PATH = path.resolve(__dirname, "../proto/user.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

// 获取容器IP地址的函数
function getServerIp() {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      // 跳过内部地址和非IPv4地址
      if (!net.internal && net.family === "IPv4") {
        return net.address;
      }
    }
  }
  return "unknown";
}

function getUser(call: any, callback: any) {
  const serverId = process.env.SERVER_ID || "unknown";
  const serverIp = getServerIp();

  const user = {
    id: call.request.id,
    name: `User ${call.request.id}`,
    email: `user${call.request.id}@example.com`,
    serverIp: serverIp, // 添加IP地址到响应中
  };

  console.log(
    `[Server ${serverId}] Handling request for user ID: ${call.request.id} from IP: ${serverIp}`
  );

  callback(null, user);
}

function main() {
  const serverId = process.env.SERVER_ID || "unknown";
  const server = new grpc.Server({});
  server.addService(proto.user.UserService.service, { getUser });

  server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(`gRPC server ${serverId} running on port ${port}`);
    }
  );
}

main();
