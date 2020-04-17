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
    }).catch( function( err ){
        alert( 'error posting item. see console for details' );
        console.log( err );
    }) //end AJAX
} // end addItem

function onReady(){
    $( '#addItemButton' ).on( 'click', addItem );
} // end onReady