export default {
  port: process.env.PORT || 8099,
  host: process.env.HOST || 'localhost',
  mongoHost: process.env.mongoHost ,
  mongoPort: process.env.mongoPort ,
  mongoUser: process.env.mongoUser ,
  mongoPass: process.env.mongoPass 
};

