
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
    # [+] setting environment variable $DOCKER_USERNAME
    travis env set DOCKER_PASSWORD secretsecret
    # [+] setting environment variable $DOCKER_PASSWORD

    travis env set DOCKER_PASSWORD secretsecret
    travis env set DOCKER_PASSWORD secretsecret
    travis env set DOCKER_PASSWORD secretsecret
    travis env set DOCKER_PASSWORD secretsecret

    npm outdatedaqqqqaaz
    travis encrypt $(heroku auth:token) --add deploy.api_key

    heroku open --app advanced-react-course

source env.sh
travis env set mongoHost $mongoHost ;travis env set mongoPort $mongoHost ;travis env set mongoUser $mongoHost ;travis env set mongoPass $mongoHost 
# [+] setting environment variable $mongoHost
# [+] setting environment variable $mongoPort
# [+] setting environment variable $mongoUser
# [+] setting en  vironment variable $mongoPass

#get origin remote  url
git remote get-url origin

#https://git-scm.com/book/en/v2/Git-Tools-Submodules
git submodule add https://github.com/viggin543/serverless_try1.git

git diff --cached --submodule


 git branch --set-upstream-to=origin/master master
# Branch master set up to track remote branch master from origin.
# local branch master will track origin/master