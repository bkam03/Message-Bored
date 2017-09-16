const express = require( 'express' );

const db = require( '../models');
const User = db.user;

const router = express.Router();

router.get('/:id', ( req, res ) => {
  console.log( `/api/users/id = ${ req.params.id }`);
  User.findOne( {
    where: {
      id: req.params.id
    }
  } )
  .then( ( user ) => {
    console.log( 'find one user', user );
    res.send( user );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} );

router.route( '/' )
.get( ( req, res ) => {
  console.log( '/api/users GET' );
  User.findAll()
  .then( ( users ) => {
    console.log( 'users', users );
    res.send( users );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} )
.post( ( req, res ) => {
  console.log( '/api/users POST' );
  User.create( {
    name: req.body.name
  } );
  res.end();
} );

module.exports = router;