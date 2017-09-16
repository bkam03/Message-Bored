const express = require( 'express' );

const { users, topics, messages } = require( '../models' );

const router = express.Router();

router.get( '/', ( req, res ) => {
  console.log( 'route works' );
  res.end();
} );

module.exports = router;