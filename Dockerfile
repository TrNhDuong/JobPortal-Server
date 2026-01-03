FROM node:20-alpine

ENV NODE_ENV=production

RUN apk add --no-cache tini

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev && npm cache clean --force

COPY ..

USER node

EXPOSE 4000

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "index"]