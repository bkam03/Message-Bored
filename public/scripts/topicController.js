angular.module( 'app' )
.controller( 'topicController', [ '$scope', '$routeParams', function( $scope, $routeParams ){
  $scope.topic = $routeParams.id;
  console.log( $routeParams );

} ] );