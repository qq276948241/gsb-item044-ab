FROM node:24-alpine
WORKDIR /app
COPY index.html 分温.js 对照.js 起.js 说明.txt ./
EXPOSE 18440
CMD ["node", "起.js"]
