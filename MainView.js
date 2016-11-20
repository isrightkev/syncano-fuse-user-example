var Observable = require("FuseJS/Observable");
var ApiKeys = require('api-keys');
var Syncano = require('./syncano-js/dist/syncano.fuse');
var connection = Syncano({ accountKey: ApiKeys.accountKey});
var User = connection.User;

function CreateUser(){
  connection.User.please().create({
    username: "kevin", 
    password: "kevin", 
    instanceName: ApiKeys.instanceName}).then(function(response) {
      debug_log("successfully created a new user")
    }).catch(function(error) { 
      debug_log(""+ error);
    });
}

function LoginUser(){
  connection.User.please().login(
    {instanceName: ApiKeys.instanceName},
    {username: "kevin", password: "kevin"}).then(function(response) {
      debug_log(response.user_key);
      debug_log(response.profile.id);
      debug_log(response.id);
  }).catch(function(error) {
      debug_log("" + error);
  });
}

module.exports = {
  'CreateUser': CreateUser,
  'LoginUser': LoginUser,
};