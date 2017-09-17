angular.module( 'app', [ 'ngRoute' ] );

angular.module( 'app' )
  .config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
    $routeProvider
    .when( '/', {
      templateUrl: 'home.html',
      controller: 'homeController'
    } )
    .otherwise( {
      template: '<h1><center>you have failed</center></h1>'
    } );
    $locationProvider.html5Mode( true );
  } ] )
  .run([]);