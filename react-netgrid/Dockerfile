FROM node:14

EXPOSE 3000 3001

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT ["/app/entrypoint.sh"]
