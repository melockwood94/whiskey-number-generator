FROM node:22

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN mkdir /var/rogue-numbers
RUN npm run build
EXPOSE 3000
CMD npm run start