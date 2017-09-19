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
      console.log('users', users );
      return users.data;
    })
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  function getUser( userId ){
    console.log( 'getUser service received', userId );
    return $http.get( `/api/users/${ userId }` )
    .then( ( user ) => {
      console.log( 'service single user', user );
      return user.data;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  return {
    getUsers: getUsers,
    getUser, getUser

  };

} ] );