const express = require( 'express' );

const { Message } = require( '../models' );

const router = express.Router();


router.get( '/latest', ( req, res ) => {
  Message.findAll({
    limit: 10,
    where: {

    },
    order: [ [ 'createdAt', 'DESC'] ]
  } )
  .then( ( messages ) => {
    res.send( messages );
  } )
  .catch( ( err ) => {
    res.send( err );
  } );
} );

router.get( '/by-topic/:topic_id', ( req, res ) => {
  Message.findAll({
    where: {
      topic_id: req.params.topic_id
    },
    order: [ [ 'createdAt', 'ASC'] ]
  } )
  .then( ( messages ) => {
    res.send( messages );
  } )
  .catch( ( err ) => {
    res.send( err );
  } );
} );

router.post( '/', ( req, res ) => {
  let message = req.body;
  Message.create( {
    body: message.body,
    author_id: message.author_id,
    topic_id: message.topic_id
  } )
  .then( ( message ) => {
    res.send( message );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} );

module.exports = router;