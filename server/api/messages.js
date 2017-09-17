const express = require( 'express' );

const { Message } = require( '../models' );

const router = express.Router();


router.route( '/' )
.get( ( req, res ) => {
  Message.findAll()
  .then( ( messages ) => {
    res.send( messages );
  } )
  .catch( ( err ) => {
    res.send( err );
  } );
} );

module.exports = router;