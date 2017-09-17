angular.module( 'app' )
.service( 'usersService', [ '$http', function( $http ){

  var getUsers = function(){
    return $http.get( '/users' )
    .then( ( users ) => {
      console.log( users );
      return users.data;
    } );

  };

} ] );