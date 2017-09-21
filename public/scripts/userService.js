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

  function getUser( username ){
    console.log( 'firing getUser in userservice', username );
    return $http.get( `/api/users/${ username }` )
    .then( ( user ) => {
      console.log( 'returned from database', user );
      let returnData = null;
      if( user.data ){
        returnData = user.data;
      }
      return returnData;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  function addUser( username ){

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
      console.log( 'in service, return data', user );
      return user.data;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  return {
    getUsers: getUsers,
    getUser: getUser,
    addUser: addUser
  };

} ] );