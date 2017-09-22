angular.module( 'app' )
.controller( 'navigationController', [ '$scope', '$rootScope', 'TopicService', function( $scope, $rootScope, TopicService ){

  function logout(){
    $rootScope.isSignedIn = false;
  }

  $scope.isSignedIn = true;
  $scope.logout = logout;


  function getTopics(){
    TopicService.getTopics()
    .then( ( topicList ) => {
      $scope.topicList = topicList;
      $scope.apply();
    } )
    .catch( ( err ) => {

    } );
  }



  setInterval( function(){

      //change menu based on whether user is logged in or not
    if( $scope.isSignedIn !== $rootScope.isSignedIn ){
      $scope.isSignedIn = $rootScope.isSignedIn;
      $scope.$apply();
    }
    //update topic list.
    getTopics();


  }, 1000 );


} ] );