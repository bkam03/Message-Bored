angular.module( 'app' )
.controller( 'topicController', [ '$scope', '$routeParams', 'TopicService', 'localStorageService', function( $scope, $routeParams, TopicService, localStorageService ){


  /*
    query topic by id
    put topic up on view
    query message table for those from
  */

  function handleMessagePost( message ){
    let messageObj = {
      message: message,
      topic_id: $routeParams.topic_id,
      author_id: localStorageService.getUserIdFromLocalStorage()
    };

    console.log( messageObj );
  }

  $scope.handleMessagePost = handleMessagePost;

  $scope.message = $routeParams.topic_id;

} ] );