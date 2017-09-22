angular.module( 'app' )
.controller( 'topicController', [ '$scope', '$routeParams', 'TopicService', function( $scope, $routeParams, TopicService ){


  /*
    query topic by id
    put topic up on view
    query message table for those from
  */

  function handleMessagePost( message ){
    console.log( message );
  }

  $scope.handleMessagePost = handleMessagePost;

  $scope.message = "";

} ] );