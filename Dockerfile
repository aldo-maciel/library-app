FROM node:10-alpine
MAINTAINER Aldo Bernardes Maciel

WORKDIR /opt/app

# build server
COPY /server/*.json /opt/app/
COPY /server/src /opt/app/src

# build view
WORKDIR /opt/app/view
COPY *.json /opt/app/view/
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --quiet node-gyp -g
RUN npm install
COPY src /opt/app/view/src
COPY public /opt/app/view/public
RUN npm run build

# run
WORKDIR /opt/app
RUN echo 'set -e' >> /boot.sh

# daemon for cron jobs
RUN echo 'crond' >> /boot.sh

RUN echo 'npm install --production' >> /boot.sh

# npm start, make sure to have a start attribute in "scripts" in package.json
RUN echo 'sleep 5' >> /boot.sh

CMD sh /boot.sh && npm --prefix /server run prod
