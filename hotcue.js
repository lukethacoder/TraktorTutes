// hover image 01 - sync
$('p').each(
    function(){
        var text = $(this).text();
        var spanText = text.replace('hover01','<span class="hoverimg01"> <i>-button.</i></span>');
        $(this).html(spanText);
    });

$('.hoverimg01').live(
    'mouseenter',
    function(){
        $('<img src="img/sync.jpg"/>').fadeIn(500) /* fades image in */
            .appendTo($(this));
});

$('.hoverimg01').live(
    'mouseleave',
    function(){
        $(this).find('img').remove(),fadeOut(); /* fades image out */
});
// hover image 02 - master sync
$('#master').each(
    function(){
        var text = $(this).text();
        var spanText = text.replace('hover02','<span class="hoverimg02"> <i>master button.</i></span>');
        $(this).html(spanText);
    });

$('.hoverimg02').live(
    'mouseenter',
    function(){
        $('<img src="img/master.jpg"/>').fadeIn(500) /* fades image in */
            .appendTo($(this));
});

$('.hoverimg02').live(
    'mouseleave',
    function(){
        $(this).find('img').remove(),fadeOut(); /* fades image out */
});
// hover image 03 - pitch button
$('#pitch').each(
    function(){
        var text = $(this).text();
        var spanText = text.replace('hover03','<span class="hoverimg03"> <i> button</i></span>');
        $(this).html(spanText);
    });

$('.hoverimg03').live(
    'mouseenter',
    function(){
        $('<img src="img/pitch.jpg"/>').fadeIn(500) /* fades image in */
            .appendTo($(this));
});

$('.hoverimg03').live(
    'mouseleave',
    function(){
        $(this).find('img').remove(),fadeOut(); /* fades image out */
});
