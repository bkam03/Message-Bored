angular.module( 'app' )
.controller( 'topicController', [ '$scope', '$rootScope', '$routeParams', 'MessageService', 'localStorageService', 'TopicService', function( $scope, $rootScope, $routeParams, MessageService, localStorageService, TopicService ){

  function getTopicOnLoad( topic_id ){
    TopicService.getTopicById( topic_id )
    .then( ( topic ) => {
      $scope.topic = topic;
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
      let postingMessage = Object.assign( {}, message );
      postingMessage.User = {
        name: localStorageService.getUserNameFromLocalStorage()
      };
      $scope.messages.push( postingMessage );
      $scope.message="";
    } )
    .catch( ( err ) => {
      console.log( err );
    } );

  }

  $scope.topic = "";
  $scope.messages = [];
  $scope.isSignedIn = $rootScope.isSignedIn;
  $scope.handleMessagePost = handleMessagePost;

  getTopicOnLoad( $routeParams.topic_id );


} ] );