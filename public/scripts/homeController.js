angular.module( 'app' )
.controller( 'homeController', [ '$scope', 'MessageService', function( $scope, MessageService ){

  //durstenfield shuffle, borrowed.
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  $scope.messages=[];

  MessageService.getAllMessages()
  .then( ( messages ) => {
    let messageArray = [];
    for( var key in messages ){
      messageArray.push( messages[ key ] );
    }
    console.log( 'return to controller', messageArray );
    $scope.messages = shuffleArray( messageArray );
    console.log( 'shuffled', $scope.messages );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

} ] );