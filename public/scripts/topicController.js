angular.module( 'app' )
.controller( 'topicController', [ '$scope', '$routeParams', 'MessageService', 'localStorageService', 'TopicService', function( $scope, $routeParams, MessageService, localStorageService, TopicService ){

  function getTopicOnLoad( topic_id ){
    TopicService.getTopicById( topic_id )
    .then( ( topic ) => {
      $scope.messages = topic.Messages;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  function handleMessagePost( message ){
    let messageObj = {
      body: message,
      topic_id: $routeParams.topic_id,
      author_id: localStorageService.getUserIdFromLocalStorage()
    };
    MessageService.addMessage( messageObj )
    .then( ( message ) => {
    } )
    .catch( ( err ) => {
      console.log( err );
    } );

  }
  $scope.topic = "";
  $scope.messages = [];
  getTopicOnLoad( $routeParams.topic_id );

  $scope.handleMessagePost = handleMessagePost;

} ] );