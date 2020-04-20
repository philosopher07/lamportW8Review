const express = require('express')
// Get just the ROUTER from express
const router = express.Router();
let inventory = [];





// Attach a get route to the router!
// localhost:5000/inventory/
router.get( '/', ( req, res )=>{
        console.log( 'in /inventory GET' );
        res.send( inventory );
    }) 
// localhost:5000/inventory/
router.post( '/', ( req, res )=>{
        console.log( 'in inventory POST:', req.body );
        inventory.push( req.body );
        res.sendStatus( 201 );
})  

// making our router available to anyone who asks for it
module.exports = router;


