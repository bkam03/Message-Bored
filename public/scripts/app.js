

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
  .when( '/register', {
    templateUrl: 'register.html',
    controller: 'registerController'
  } )
  .when( '/login', {
    templateUrl: 'login.html',
    controller: 'loginController'
  } )
  .otherwise( {
    template: '<h1><center>Nope</center></h1>'
  } );

  $locationProvider.html5Mode( true );
} ] )
.run( function(){} );