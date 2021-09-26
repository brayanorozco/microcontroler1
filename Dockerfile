FROM node:16.9.0-alpine3.12

ENV WORKDIR=/app
ENV TZ="Europe/Spain/Madrid"

RUN apk add tzdata

RUN mkdir $WORKDIR
WORKDIR $WORKDIR

COPY package.json $WORKDIR

RUN npm i --production

COPY dist $WORKDIR/dist

CMD [ "npm", "start" ]


