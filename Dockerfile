FROM node:latest
LABEL author="domrevigor@gmail.com"
ADD ["package.json","webpack.config.js", "/"] 
ADD lib /lib/
ADD views /views/
ARG mongoHost
ARG mongoPort
ARG mongoUser
ARG mongoPass
ARG PORT
ENV PORT=${PORT} mongoHost=${mongoHost} mongoPort=${mongoPort} mongoUser=${mongoUser} mongoPass=${mongoPass}

RUN npm config set loglevel warn && \
  npm install --production > /dev/null && \
  npm run dist && \
  npm run build-node

CMD npm run start-prod --container