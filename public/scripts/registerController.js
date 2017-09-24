angular.module( 'app' )
.controller( 'registerController', [ '$scope', '$location', 'UserService', 'localStorageService', function( $scope, $location, UserService, localStorageService ){

  $scope.UserService = UserService;
  $scope.username = "";

  function addUser( username ){
    UserService.addUser( username )
    .then( ( newUser ) => {
      localStorageService.addUserToLocalStorage( newUser.id, newUser.name );
      $location.path( '/' );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  $scope.addUser = addUser;

} ] );