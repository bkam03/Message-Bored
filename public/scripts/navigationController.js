angular.module( 'app' )
.controller( 'navigationController', [ '$scope', '$rootScope', function( $scope, $rootScope ){

  function logout(){
    console.log( 'firing logout' );
    $rootScope.isSignedIn = false;
  }

  $scope.isSignedIn = true;
  $scope.logout = logout;

  setInterval( function(){
    console.log( 'interval', $rootScope.isSignedIn, $scope.isSignedIn );
    if( $scope.isSignedIn !== $rootScope.isSignedIn ){
      console.log( 'inside if' );
      $scope.isSignedIn = $rootScope.isSignedIn;
      $scope.$apply();
    }
  }, 1000 );


} ] );