angular.module( 'app' )
.controller( 'loginController', [ '$scope', 'signInOutService', function( $scope, signInOutService ){
  $scope.test = 'no';
  $scope.addUserToLocalStorage = signInOutService.addUserToLocalStorage;
  $scope.removeUserFromLocalStorage = signInOutService.removeUserFromLocalStorage;
  $scope.getUserFromLocalStorage = signInOutService.getUserFromLocalStorage;

} ] );