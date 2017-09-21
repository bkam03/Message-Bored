angular.module( 'app' )
.service( 'localStorageService', [ '$http', function( $http ){

  let localStorage = window.localStorage;

  function addUserToLocalStorage( id, name ){
    console.log( 'in local storage id, name', id, name );
    localStorage.setItem( 'id', id );
    return localStorage.setItem( 'name', name );
  }

  function removeUserFromLocalStorage(){
    localStorage.removeItem( 'name' );
    localStorage.removeItem( 'id' );
    return;
  }

  function getUserFromLocalStorage(){
    return localStorage.getItem( 'user' );
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