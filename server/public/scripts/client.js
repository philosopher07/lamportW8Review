$( document ).ready( onReady );

function addItem(){
    console.log( 'in addItem' );
    // get user input and put into an object
    let objectToSend = {
        size: $( '#sizeIn' ).val(),
        color: $( '#colorIn' ).val(),
        name: $( '#nameIn' ).val()
    }
    console.log( 'sending:', objectToSend );
    // send to server via AJAX POST
    $.ajax({
        type: 'POST',
        url: '/inventory',
        data: objectToSend
    }).then( function( response ){
        console.log( 'back from POST:', response );
        // update DOM
        getItems();
    }).catch( function( err ){
        alert( 'error posting item. see console for details' );
        console.log( err );
    }) //end AJAX
} // end addItem

function getItems(){
    console.log( 'in getItems' );
    // ajax get call
    $.ajax({
        type: 'GET',
        url: '/inventory'
    }).then( function( response ){
        // empty output element
        let el = $( '#inventoryOut' );
        el.empty();
        // loop through response
        for( let i=0; i< response.length; i++){
            // display each item on DOM
            el.append( `<li>${ response[ i ].name }</li>`)
        } // end for
    }).catch( function( err ){
        alert( 'error getting inventory. see console for details' );
        console.log( err );
    })
} // end getItems

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
    getItems();
} // end onReady