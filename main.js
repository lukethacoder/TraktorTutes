$(function(){ // Orange Arrow - Jump to top
	$('.jumptotop').click(function(){
		$('html, body').animate({scrollTop : 0}, 800);
		return false;
	});
});

$(function() { // jump to - box of links
    $(".links").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({scrollTop: $( $(this).attr('href') ).offset().top }, 600); // scrollTop to this as href sets the scroll point to the corresponding div

    });
});
