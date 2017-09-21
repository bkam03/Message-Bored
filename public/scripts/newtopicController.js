
angular.module( 'app' )
.controller( 'newtopicController', [ '$scope', function( $scope ){

  function submitNewTopic( newTopic ){
    console.log( 'new topic', newTopic );
  }

  $scope.newtopic= "";
  $scope.error= "";

  $scope.submitNewTopic = submitNewTopic;
} ] );