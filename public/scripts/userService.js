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
    });
  }

  return {
    getUsers: getUsers

  };

} ] );