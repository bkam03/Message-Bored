const express = require( 'express' );

const { User } = require( '../models');
const router = express.Router();

router.get('/:id', ( req, res ) => {
  User.findOne( {
    where: {
      id: req.params.id
    }
  } )
  .then( ( user ) => {
    res.send( user );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} );

router.route( '/' )
.get( ( req, res ) => {
  User.findAll()
  .then( ( users ) => {
    res.send( users );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} )
.post( ( req, res ) => {
  User.create( {
    name: req.body.name
  } )
  .then( ( user ) => {
    res.send( user );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} );

module.exports = router;