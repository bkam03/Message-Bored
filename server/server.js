const express = require( 'express' );
const bp = require( 'body-parser' );

const db = require( './models' );
const apiRoute = require( './api/index.js' );

const PORT = process.env.PORT || 3000
const app = express();

app.use( bp.json( { extended: true } ) );

app.use( express.static( 'public' ) );

app.get( '/', ( req, res )=> {

app.use( '/api', apiRoute );

const server = app.listen( PORT, () => {
  console.log( `server listening at port ${ PORT }`);
  db.sequelize.sync( { force: true } );
} );