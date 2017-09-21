angular.module( 'app' )
.service( 'UserService', [ '$http', function( $http ){

  /*var getUsers = function(){
    return $http.get( '/users' )
    .then( ( users ) => {
      console.log( users );
      return users.data;
    } );

  };*/
  var users = [];

/*  $http.get( '/api/users' )
  .then( ( users ) => {
    console.log( 'user service', users );
    users = users;
  } );
*/
  function getUsers() {
    //$http
    return $http.get('/api/users')
    .then((users) => {
      return users.data;
    })
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  function getUser( userId ){
    return $http.get( `/api/users/${ userId }` )
    .then( ( user ) => {
      return user.data;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  function addUser( username ){
    console.log( 'addUser service', username );

    let data = {
      name: username
    };

    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    return $http.post( '/api/users', data, config )
    .then( ( user ) => {
      console.log( 'user returned from server', user.data );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );

    /*post(url, data, [config]);*/
  }

  return {
    getUsers: getUsers,
    getUser: getUser,
    addUser: addUser
  };

} ] );