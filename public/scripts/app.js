

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
  .when( '/newtopic', {
    templateUrl: 'newtopic.html',
    controller: 'newtopicController'
  } )
  .when( '/topics/:id', {
    templateUrl: 'topic.html',
    controller: 'topicController'
  } )
  .otherwise( {
    template: '<h1><center>Nope</center></h1>'
  } );

  $locationProvider.html5Mode( true );
} ] )
.run( [ '$rootScope', function( $rootScope ){
  $rootScope.isSignedIn = false;
} ] );


/*.run( [ 'APP_VERSION', '$rootScope', function( APP_VERSION, $rootScope ){
        // initialize
        $rootScope.version = APP_VERSION;
    } ] );*/