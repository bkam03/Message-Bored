const express = require( 'express' );

const db = require( '../models');
const User = db.User;
const router = express.Router();

router.get('/:name', ( req, res ) => {
  User.findOne( {
    where: {
      name: req.params.name
    }
  } )
  .then( ( user ) => {
    res.send( user );
  } )
  .catch( ( err ) => {
    console.log( err );
  } );
} );

router.get('/user/:id', ( req, res ) => {
  User.findOne( {
    where: {
      id: req.params.id
    },
    include : [
      {
        model: db.Message,
        include : [
          {
            model: db.Topic
          }
        ],
      }
    ],
    order: [ [ db.Message, 'createdAt', 'ASC' ] ]
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