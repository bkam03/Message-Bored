

angular.module( 'app', [ 'ngRoute' ] );


angular.module( 'app' )
.config( [ '$routeProvider', '$locationProvider', function( $routeProvider, $locationProvider ){
  $routeProvider
  .when( '/', {
    templateUrl: 'home.html',
    controller: 'homeController'
  } )
  .when( '/users', {
    templateUrl: 'users.html',
    controller: 'UserController'
  } )
  .otherwise( {
    template: '<h1><center>Nope</center></h1>'
  } );

  $locationProvider.html5Mode( true );
} ] )
.run( function(){} );