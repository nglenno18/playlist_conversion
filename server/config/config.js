var env = process.env.NODE_ENV || 'development'; //need to configure NODE_ENV in package.json
console.log(`***********ENVIRONMENT: `, env);

if(env=== 'development' || env === 'test' || env === 'test '){
  process.env.port = 3000;
  var envConfig = config[env]; //Stores JUST the config variables for current env

  console.log(Object.keys(envConfig));  //finds all the keys in env
  Object.keys(envConfig).forEach(function(key){ //callback gets called with each item
    process.env[key] = envConfig[key];  //set the process.env keys as the local
  });
}

console.log(`\n       PORT: ${process.env.PORT}`);
// if(env === 'development'){
//   //set up mongodb URL
//   console.log('\nenv = dev');
//   process.env.PORT = 3000;  //remove the default below
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TokenChat';
// }else if(env === 'test ' || env === 'test'){
//   //set custom DB URL
//   console.log('\nenv = test');
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TokenChatTest';
// }

console.log(process.env.PORT);
