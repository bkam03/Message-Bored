angular.module( 'app' )
.controller( 'homeController', [ '$scope', function( $scope ){
  $scope.ctrlName = 'home';
  $scope.myModel="default";

} ] );