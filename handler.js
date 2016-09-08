var user = require('./lib/users');

module.exports.users = function(event, context) {

  if(event.path === 'users/getUsers' && event.method === 'GET') {
    user.getUsers(event,context);

  } else if(event.path === 'users/createUser' && event.method === 'POST') {
  	user.getUsers(event,context);

  } else if(event.path === 'users/updateUser' && event.method === 'POST') {
  	user.getUsers(event,context);

  } else if(event.path === 'users/getUser' && event.method === 'GET'){
  	user.getUser(event,context);
  }

};
