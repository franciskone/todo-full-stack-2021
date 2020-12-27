FROM node:10-alpine
RUN apk add --no-cache nodejs npm yarn

WORKDIR /app
COPY . /app
#RUN chown root /app/wait-for.sh
#RUN chown -R node:node /home/node/app
RUN yarn
#CMD yarn dev
EXPOSE 3000/tcp
