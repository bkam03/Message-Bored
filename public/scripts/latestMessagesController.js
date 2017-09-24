angular.module( 'app' )
.controller( 'latestMessagesController', [ '$scope', 'MessageService', function( $scope, MessageService ){

  $scope.messages= [];

  MessageService.getLatestMessages()
  .then( ( messages ) => {
    $scope.messages = messages;
  } );

} ] );