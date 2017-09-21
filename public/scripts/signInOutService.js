angular.module( 'app' )
.service( 'signInOutService', [ '$http', function( $http ){

  let localStorage = window.localStorage;

  function addUserToLocalStorage( username ){
    return localStorage.setItem( 'username', username );
  }

  function removeUserFromLocalStorage(){
    return localStorage.removeItem( 'username' );
  }

  function getUserFromLocalStorage(){
    return localStorage.getItem( 'username' );
  }

  return {
    addUserToLocalStorage,
    removeUserFromLocalStorage,
    getUserFromLocalStorage
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