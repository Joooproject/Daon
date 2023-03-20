$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
        $('.topb').fadeIn();
    } else {
        $('.topb').fadeOut();
    }
});

$( '.topb' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

