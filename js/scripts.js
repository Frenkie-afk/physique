$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "fade",
            duration: 600
        },
        hide: {
            effect: "fade",
            duration: 600
        }
    });

    $( "#pop-up" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
        document.getElementById("overlay").classList.add("active");
    });
    $( ".ui-button" ).on( "click", function() {
        document.getElementById("overlay").classList.remove("active");
    });
} );