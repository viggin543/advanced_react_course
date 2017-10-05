FROM node:latest
LABEL author="domrevigor@gmail.com"
ADD ["package.json","webpack.config.js","lib","views","node_modules", "/"] 

ARG mongoHost
ARG mongoPort
ARG mongoUser
ARG mongoPass
ARG PORT
ENV PORT=${PORT} mongoHost=${mongoHost} mongoPort=${mongoPort} mongoUser=${mongoUser} mongoPass=${mongoPass}

RUN npm run dist && \
  npm run build-node

CMD npm run start-prod --container