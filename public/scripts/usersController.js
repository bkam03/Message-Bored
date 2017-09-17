angular.module( 'app' )
.controller( 'usersController', [ '$scope', function( $scope ){
  $scope.users = 'home';
  $scope.myModel="default";
} ] );