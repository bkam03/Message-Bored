angular.module( 'app' )
.controller( 'singleUserController', [ '$scope', '$routeParams', 'UserService', function( $scope, $routeParams, UserService ){

  UserService.getUserById( $routeParams.user_id )
  .then( ( user ) => {
    console.log( 'returned to controller', user );
    $scope.user = user;
    $scope.messages = user.Messages;
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

} ] );