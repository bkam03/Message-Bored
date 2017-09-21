angular.module( 'app' )
.service( 'signInOutService', [ '$http', function( $http ){

  function localStorage( data ){
    console.log( 'localStorage', window.localStorage );

  }

  return {
    localStorage
  };
} ] );


/*
set
localStorage.setItem('myCat', 'Tom');

get
var cat = localStorage.getItem("myCat");


delete
localStorage.removeItem("myCat");


*/