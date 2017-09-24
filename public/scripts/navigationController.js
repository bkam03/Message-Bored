angular.module( 'app' )
.controller( 'navigationController', [ '$location', '$scope', '$rootScope', 'TopicService', 'localStorageService', function( $location, $scope, $rootScope, TopicService, localStorageService ){

  function logout(){
    localStorageService.removeUserFromLocalStorage();
    $rootScope.isSignedIn = false;
    $location.path( '/' );

  }

  function getTopics(){
    TopicService.getTopics()
    .then( ( topicList ) => {
      $scope.topicList = topicList;
    } )
    .catch( ( err ) => {

    } );
  }

  function isUserSignedIn(){
    let isUserSignedIn = localStorageService.getUserIdFromLocalStorage();
    console.log( 'signed in?', isUserSignedIn );
  }

  $scope.isSignedIn = true;
  $scope.logout = logout;

  isUserSignedIn();
  getTopics();



  setInterval( function(){

      //change menu based on whether user is logged in or not
    if( $scope.isSignedIn !== $rootScope.isSignedIn ){
      $scope.isSignedIn = $rootScope.isSignedIn;
      //$scope.$apply is called in getTopics below,
    }
    //update topic list.
    getTopics();
    $scope.$apply();

  }, 1000 );


} ] );