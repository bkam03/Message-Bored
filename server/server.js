const express = require( 'express' );
const bp = require( 'body-parser' );
const path = require( 'path' );

const db = require( './models' );
const apiRoute = require( './api/index.js' );

const PORT = process.env.PORT || 3000;
const app = express();

app.use( bp.json( { extended: true } ) );

app.use( express.static( '../public' ) );

app.use( '/api', apiRoute );

app.get( '*', ( req, res ) => {
  res.sendFile( 'index.html', { root: path.join(__dirname, '../public') } );
} );

const server = app.listen( PORT, () => {
  console.log( `server listening at port ${ PORT }`);
  db.sequelize.sync( { force: true } );
} );