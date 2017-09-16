const express = require( 'express' );

const usersRoute = require( './users.js' );
const messagesRoute = require( './messages.js' );
const topicsRoute = require( './topics.js' );

const router = express.Router();

router.use( '/users', usersRoute );
router.use( '/topics', topicsRoute );
router.use( '/messages', messagesRoute );


module.exports = router;