angular.module( 'app' )
.controller( 'loginController', [ '$location', '$scope', '$rootScope', 'localStorageService', 'UserService', function( $location, $scope, $rootScope, localStorageService, UserService ){
  $scope.error = '@';

  function signInUser( username ){
    console.log( 'firing signInUser in controller', username );
    $scope.error = "";
    UserService.getUser( username )
    .then( ( user ) => {
      if( user ){
        let { id, name } = user;
        console.log( 'found user', id, name );
        localStorageService.addUserToLocalStorage( id, name );
        $rootScope.isSignedIn = true;
        console.log( 'rootscope change', $rootScope.isSignedIn );
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



