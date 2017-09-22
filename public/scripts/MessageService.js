angular.module( 'app' )
.service( 'MessageService', [ '$http', function( $http ){

  function addMessage( messageObj ){

    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    return $http.post( '/api/messages', messageObj, config )
    .then( ( message ) => {
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