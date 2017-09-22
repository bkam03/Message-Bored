angular.module( 'app' )
.controller( 'topicController', [ '$scope', '$routeParams', 'MessageService', 'localStorageService', 'TopicService', function( $scope, $routeParams, MessageService, localStorageService, TopicService ){


  /*
    query topic by id
    put topic up on view
    query message table for those from
  */
  function getTopicOnLoad( topic_id ){
    console.log( 'in topicLoad topic_id', topic_id );
    TopicService.getTopicById( topic_id )
    .then( ( topic ) => {
      console.log( 'return from service, in controller', topic );
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
      console.log( 'in controller, MessageService returned ', message );
      $scope.messages.push( message );
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