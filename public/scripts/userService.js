angular.module( 'app' )
.service( 'UserService', [ '$http', function( $http ){

  var users = [];

  function getUsers() {
    return $http.get('/api/users')
    .then((users) => {
      return users.data;
    })
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  function getUser( username ){
    return $http.get( `/api/users/${ username }` )
    .then( ( user ) => {
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

  function getUserById( user_id ){
    return $http.get( `/api/users/user/${ user_id }` )
    .then( ( user ) => {
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
      return user.data;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  return {
    getUsers,
    getUser,
    getUserById,
    addUser
  };

} ] );