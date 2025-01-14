FROM node:18-alpine
WORKDIR /counterapp
COPY ./package*.json /counterapp
RUN npm install
COPY . .
CMD [ "npm","run" ,"dev"]