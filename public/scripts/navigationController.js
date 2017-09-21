angular.module( 'app' )
.controller( 'navigationController', [ '$scope', '$rootScope', function( $scope, $rootScope ){

  function logout(){
    $rootScope.isSignedIn = false;
  }

  $scope.isSignedIn = true;
  $scope.logout = logout;

  setInterval( function(){
    if( $scope.isSignedIn !== $rootScope.isSignedIn ){
      $scope.isSignedIn = $rootScope.isSignedIn;
      $scope.$apply();
    }
  }, 1000 );


} ] );