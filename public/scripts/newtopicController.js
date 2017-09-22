
angular.module( 'app' )
.controller( 'newtopicController', [ '$scope', 'TopicService','localStorageService', function( $scope, TopicService, localStorageService ){

  function submitNewTopic( newTopic ){
    let userId = localStorageService.getUserIdFromLocalStorage();
    console.log( 'new topic', newTopic, userId );
    TopicService.addTopic( newTopic, userId )
    .then( ( user ) => {
      console.log( 'controller received ', user );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );

  }

  $scope.newtopic= "";
  $scope.error= "";

  $scope.submitNewTopic = submitNewTopic;
} ] );