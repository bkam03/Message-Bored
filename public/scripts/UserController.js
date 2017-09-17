angular.module( 'app' )
.controller( 'UserController', [ '$scope', 'UserService', function( $scope, UserService ){
  $scope.UserService = UserService;
  $scope.users = [];

  UserService.getUsers()
  .then( ( users ) => {
    console.log( 'users in controller', users );
    $scope.users = users;
  } );
  $scope.myModel="default";
} ] );