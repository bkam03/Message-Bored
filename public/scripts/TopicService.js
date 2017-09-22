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
      let user = topic.data;
      return user;
    } )
    .catch( ( err ) => {
      console.log( err );
      return err;
    } );
  }


  function getTopics(){
    return $http.get('/api/topics')
    .then((topics) => {
      return topics.data;
    })
    .catch( ( err ) => {
      console.log( err );
    } );
  }


  return {
    addTopic,
    getTopics
  };

} ] );