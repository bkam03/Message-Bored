angular.module( 'app' )
.service( 'MessageService', [ '$http', function( $http ){

  function addMessage( messageObj ){
    console.log( 'received in MessageService', messageObj );

    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    return $http.post( '/api/messages', messageObj, config )
    .then( ( message ) => {
      console.log( 'in service, received from server', message );
      return message.data;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  return {
    addMessage
  };

} ] );