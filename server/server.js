// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
const port = 5000;
let inventory = [];
// spin up server
app.listen( port, ()=>{
    console.log( 'server up:', port );
})
// routes
app.get( '/inventory', ( req, res )=>{
    console.log( 'in /inventory GET' );
    res.send( inventory );
}) // end /inventory GET

app.post( '/inventory', ( req, res )=>{
    console.log( 'in inventory POST:', req.body );
    inventory.push( req.body );
    res.sendStatus( 201 );
}) // end inventory POST