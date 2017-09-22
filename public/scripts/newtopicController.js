
angular.module( 'app' )
.controller( 'newtopicController', [ '$scope', 'TopicService','localStorageService', function( $scope, TopicService, localStorageService ){

  function submitNewTopic( newTopic ){
    let userId = localStorageService.getUserIdFromLocalStorage();
    TopicService.addTopic( newTopic, userId )
    .then( ( user ) => {
    } )
    .catch( ( err ) => {
      $scope.error = err;
    } );

  }

  $scope.newtopic= "";
  $scope.error= "";

  $scope.submitNewTopic = submitNewTopic;
} ] );