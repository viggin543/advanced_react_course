FROM node:latest
LABEL author="domrevigor@gmail.com"
ADD ["package.json","webpack.config.js", "/"] 
ADD lib /lib/
ENV PORT=8099
EXPOSE 8089
RUN npm install --production && \
  npm run dist && \
  npm run build-node

CMD npm run start-prod --container