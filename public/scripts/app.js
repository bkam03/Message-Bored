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
  .when( '/users/:user_id', {
    templateUrl: 'user.html',
    controller: 'singleUserController'
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
  .when( '/topics/:topic_id', {
    templateUrl: 'topic.html',
    controller: 'topicController'
  } )
  .when( '/latestMessages', {
    templateUrl: 'latestMessages.html',
    controller: 'latestMessagesController'
  })
  .otherwise( {
    template: '<h1><center>Nope</center></h1>'
  } );

  $locationProvider.html5Mode( true );
} ] )
.run( [ '$rootScope', function( $rootScope ){
  $rootScope.isSignedIn = false;
} ] );
