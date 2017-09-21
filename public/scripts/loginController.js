angular.module( 'app' )
.controller( 'loginController', [ '$scope', 'signInOutService', function( $scope, signInOutService ){
  $scope.test = 'no';
  $scope.localStorage = signInOutService.localStorage;

} ] );