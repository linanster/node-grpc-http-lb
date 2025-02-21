# FROM node:18-alpine
FROM acr-on-enterprise-registry.cn-hangzhou.cr.aliyuncs.com/on-common/node:18.18.2

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY proto ./proto
COPY src ./src

RUN npm install

EXPOSE 50051

CMD ["npm", "run", "start:grpc"]
