angular.module( 'app' )
.controller( 'latestMessagesController', [ '$scope', 'MessageService', function( $scope, MessageService ){

  MessageService.getLatestMessages()
  .then( ( messages ) => {
    console.log( 'returned to controller', messages );
  } );


} ] );