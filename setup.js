$('p').each(
    function(){
        var text = $(this).text();
        var spanText = text.replace('button','<span class="hoverimg01"><i>button.</i></span>');
        $(this).html(spanText);
    });

$('.hoverimg01').live(
    'mouseenter',
    function(){
        $('<img src="img/button.jpg"/>').fadeIn(500) /* fades image in */
            .appendTo($(this));
});

$('.hoverimg01').live(
    'mouseleave',
    function(){
        $(this).find('img').remove(),fadeOut(); /* fades image out */
    });
