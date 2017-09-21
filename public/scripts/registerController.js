angular.module( 'app' )
.controller( 'registerController', [ '$scope', 'UserService', function( $scope, UserService ){
  $scope.UserService = UserService;

  $scope.username = "";


  function addUser( username ){
    UserService.addUser( username )
    .then( ( newUser ) => {
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