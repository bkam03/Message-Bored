
angular.module( 'app' )
.controller( 'newtopicController', [ '$scope', '$location', 'TopicService','localStorageService', function( $scope, $location, TopicService, localStorageService ){

  function submitNewTopic( newTopic ){
    let userId = localStorageService.getUserIdFromLocalStorage();
    TopicService.addTopic( newTopic, userId )
    .then( ( topic ) => {
      $location.path( `/topics/${ topic.id }` );
    } )
    .catch( ( err ) => {
      $scope.error = err;
    } );

  }

  $scope.newtopic= "";
  $scope.error= "";

  $scope.submitNewTopic = submitNewTopic;
} ] );