angular.module( 'app' )
.controller( 'registerController', [ '$scope', '$location', 'UserService', 'localStorageService', function( $scope, $location, UserService, localStorageService ){
  $scope.UserService = UserService;

  $scope.username = "";


  function addUser( username ){
    UserService.addUser( username )
    .then( ( newUser ) => {
      console.log( newUser );
      localStorageService.addUserToLocalStorage( newUser.id, newUser.name );
      $location.path( '/' );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  $scope.addUser = addUser;







  /*$scope.users = [];

  UserService.getUsers()
  .then( ( users ) => {
    $scope.users = users;
  } )
  .catch( ( err ) => {
    console.log( err );
  } );



  function showUserHandler( data ){
    let userId = data.user.id;
    UserService.getUser( userId )
    .then( ( user ) => {
      $scope.user = user;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  $scope.showUserHandler = showUserHandler;*/

/*  $scope.getUser = UserService.getUser;
*/
} ] );