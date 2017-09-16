const express = require( 'express' );
const bp = require( 'body-parser' );

const db = require( './models' );

const PORT = process.env.PORT || 3000
const app = express();

app.use( bp.json( { extended: true } ) );

app.use( express.static( 'public' ) );

const server = app.listen( PORT, () => {
  console.log( `server listening at port ${ PORT }`);
  db.sequelize.sync( { force: true } );
} );