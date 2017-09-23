angular.module( 'app' )
.service( 'localStorageService', [ '$http', function( $http ){

  let localStorage = window.localStorage;

  function addUserToLocalStorage( id, name ){
    localStorage.setItem( 'id', id );
    return localStorage.setItem( 'name', name );
  }

  function removeUserFromLocalStorage(){
    localStorage.removeItem( 'name' );
    localStorage.removeItem( 'id' );
    return;
  }

  function getUserIdFromLocalStorage(){
    return localStorage.getItem( 'id' );
  }

  function getUserNameFromLocalStorage(){
    return localStorage.getItem( 'name' );
  }

  return {
    addUserToLocalStorage,
    removeUserFromLocalStorage,
    getUserIdFromLocalStorage,
    getUserNameFromLocalStorage
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