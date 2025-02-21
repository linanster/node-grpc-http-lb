import express from "express";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";
import { ProtoGrpcType } from "./proto/user";

const app = express();
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

// 将目标改为 Nginx 地址
// const target = "nginx:50051";
const target = "demo2-nginx-svc:8000";
const client = new proto.user.UserService(
  target,
  grpc.credentials.createInsecure()
);

app.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  client.getUser({ id }, (error, response) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }
    res.json(response);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT}`);
  console.log(`Connected to gRPC servers at: ${target}`);
});
