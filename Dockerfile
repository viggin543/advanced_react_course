FROM node:latest
LABEL author="domrevigor@gmail.com"
ADD ["package.json","webpack.config.js", "/"] 
ADD views /views/ 
ADD lib /lib/ 
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