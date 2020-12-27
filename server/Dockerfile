FROM alpine:latest
RUN apk add --no-cache nodejs npm yarn
RUN ls

WORKDIR /app
COPY . /app
RUN yarn
CMD yarn dev
EXPOSE 3000/tcp
