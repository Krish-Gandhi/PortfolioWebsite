FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

RUN npm install -g serve
EXPOSE 8080
CMD ["serve", "dist", "-l", "8080"]