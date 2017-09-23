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


  function getLatestMessages(){
    console.log( 'in service' );
    return $http.get( '/api/messages/latest' )
    .then( ( messages ) => {
      let data = messages;
      console.log( 'returned to service', data );
      return data;
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }

  return {
    addMessage,
    getLatestMessages
  };

} ] );