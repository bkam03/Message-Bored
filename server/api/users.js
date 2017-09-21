const express = require( 'express' );

const { User } = require( '../models');
const router = express.Router();

router.get('/:name', ( req, res ) => {
  User.findOne( {
    where: {
      name: req.params.name
    }
  } )
  .then( ( user ) => {
    console.log( 'in route, db returned', user );
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