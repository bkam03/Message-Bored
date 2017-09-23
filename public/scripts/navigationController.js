angular.module( 'app' )
.controller( 'navigationController', [ '$scope', '$rootScope', 'TopicService', function( $scope, $rootScope, TopicService ){

  function logout(){
    $rootScope.isSignedIn = false;
  }

  $scope.isSignedIn = true;
  $scope.logout = logout;

  getTopics();

  function getTopics(){
    TopicService.getTopics()
    .then( ( topicList ) => {
      $scope.topicList = topicList;
    } )
    .catch( ( err ) => {

    } );
  }



/*  setInterval( function(){

      //change menu based on whether user is logged in or not
    if( $scope.isSignedIn !== $rootScope.isSignedIn ){
      $scope.isSignedIn = $rootScope.isSignedIn;
      //$scope.$apply is called in getTopics below,
    }
    //update topic list.
    getTopics();
    $scope.$apply();

  }, 1000 );*/


} ] );