FROM node:alpine

WORKDIR /backend

COPY package*.json ./

COPY ./prisma ./prisma

RUN npm install

RUN npx prisma generate

EXPOSE 3001

COPY . .

CMD ["npm","start", "prisma", "generate"]