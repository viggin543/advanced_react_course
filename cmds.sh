brew install yarn
yarn init
yarn eslint -- --init
yarn add --dev eslint
yarn eslint --init
yarn add --dev eslint-plugin-react
yarn add --dev babel-eslint
yarn dev # run server
https://github.com/Unitech/pm2
yarn pm2 logs  # see dev server logs
yarn pm2 kill # guess what ..
yarn webpaack -wd
yarn upgrade-interactive
yarn jest --coverage
yarn jest test --watch
yarn NODE_PATH=./lib pm2 start lib/server.js --watch --interpreter babel-node


 "babel": {
    "presets": [
      "react",
      "env",
      "stage-2"
    ]
  },

    "stage-2"  : this one says babel to take javascript version including all the polyfills
    The TC39 Process of javascript development 



    gem install travis
    travis env set DOCKER_USERNAME domrevigor
    [+] setting environment variable $DOCKER_USERNAME
    travis env set DOCKER_PASSWORD secretsecret
    [+] setting environment variable $DOCKER_PASSWORD


    npm outdatedaqqqqaaz
    travis encrypt $(heroku auth:token) --add deploy.api_key

    heroku open --app advanced-react-course
