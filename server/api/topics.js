const express = require( 'express' );

const db = require( '../models' );

const Topic = db.Topic;
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
  Topic.update( {
    topic: req.body.topic
  },{
    where: {
      id: req.body.id
    }
  } )
  .then( ( topic ) => {
    console.log( topic );
    res.send( topic );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );

} )
.post( ( req, res ) => {
  console.log( 'post route received', req.body );
  let data = req.body;
  Topic.create( {
    topic: data.topic,
    created_by: data.userId
  } )
  .then( ( topic ) => {
    console.log( 'posted to db', topic );
    res.send( topic );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} );


module.exports = router;