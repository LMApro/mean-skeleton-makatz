# RECONFIG METADATA

### Node and Npm

- Package name
- Package description
- Version
- Dependencies
- `npm install`

### Bower

- `.bowerrc`
- Name
- Description
- Version
- Dependencies
- `bower install`

# CONFIG MONGODB

- Create new account and databases in MongoLab
- Get the connection string
- Reconfig the connection string in `server/config/mongo.js`

# GIT CONFIG

- Install *Git*
- Init the project with `git init`
- Make the first commit

# DEPLOY TO HEROKU

- Install *Heroku toolbelt* 
- Config **engine** property in `package.json`
- `heroku login`
- `heroku create`
- `heroku config:set NODE_ENV=production`
- `git push heroku master`
- `heroku ps:scale web=1`
- `heroku open`


