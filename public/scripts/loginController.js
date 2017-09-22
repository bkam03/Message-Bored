angular.module( 'app' )
.controller( 'loginController', [ '$location', '$scope', '$rootScope', 'localStorageService', 'UserService', function( $location, $scope, $rootScope, localStorageService, UserService ){
  $scope.error = '@';

  function signInUser( username ){
    $scope.error = "";
    UserService.getUser( username )
    .then( ( user ) => {
      if( user ){
        let { id, name } = user;
        localStorageService.addUserToLocalStorage( id, name );
        $rootScope.isSignedIn = true;
        $location.path( '/' );
      } else {
        $scope.error = "username not found";
      }
    } )
    .catch( ( err ) => {
      $scope.error = err;
    } );
  }


  $scope.signInUser = signInUser;
  $scope.removeUserFromLocalStorage = localStorageService.removeUserFromLocalStorage;
  $scope.getUserFromLocalStorage = localStorageService.getUserFromLocalStorage;

} ] );



