FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY proto ./proto
COPY src ./src

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start:http"]
