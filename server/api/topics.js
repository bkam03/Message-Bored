const express = require( 'express' );

const router = express.Router();

router.get( '/', ( req, res ) => {
  console.log( '/api/topics GET' );
  res.end();
} );

module.exports = router;