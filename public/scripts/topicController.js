angular.module( 'app' )
.controller( 'topicController', [ '$scope', '$routeParams', 'MessageService', 'localStorageService', function( $scope, $routeParams, MessageService, localStorageService ){


  /*
    query topic by id
    put topic up on view
    query message table for those from
  */

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

  $scope.messages = [];
  $scope.handleMessagePost = handleMessagePost;

  $scope.message = $routeParams.topic_id;

} ] );