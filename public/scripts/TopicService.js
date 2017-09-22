angular.module( 'app' )
.service( 'TopicService', [ '$http', function( $http ){


  function addTopic( topic, userId ){
    console.log( 'addTopic in service', topic, userId );

    let data = {
      topic: topic,
      userId: userId
    };

    let config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    return $http.post( '/api/topics', data, config )
    .then( ( topic ) => {
      console.log( 'return from server in topicservice', topic );
    } )
    .catch( ( err ) => {
      console.log( err );
    } );
  }


  return {
    addTopic
  };

} ] );