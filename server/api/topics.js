const express = require( 'express' );

const db = require( '../models' );

const Topic = db.topic;
const router = express.Router();

router.route( '/' )
.get( ( req, res ) => {
  Topic.findAll()
  .then( ( topics ) => {
    res.send( topics );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} )
.put( ( req, res ) => {

} )
.post( ( req, res ) => {
  Topic.create( {
    topic: req.body.topic
  } )
  .then( ( topic ) => {
    res.send( topic );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} );


module.exports = router;