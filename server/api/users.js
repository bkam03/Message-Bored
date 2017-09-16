const express = require( 'express' );

const router = express.Router();

router.get( '/', ( req, res ) => {
  console.log( '/api/users GET' );
  res.end();
} );

module.exports = router;