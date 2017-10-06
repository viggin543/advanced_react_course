FROM node:latest
LABEL author="domrevigor@gmail.com"

WORKDIR workdir
ADD ["package.json","webpack.config.js", "/workdir/"] 
ADD views /workdir/views/ 
ADD lib /workdir/lib/ 
ARG mongoHost
ARG mongoPort
ARG mongoUser
ARG mongoPass
ARG PORT
ENV PORT=${PORT} mongoHost=${mongoHost} mongoPort=${mongoPort} mongoUser=${mongoUser} mongoPass=${mongoPass}
RUN npm install --production && \
    npm run dist && \
    npm run build-node

CMD npm run start-prod --container