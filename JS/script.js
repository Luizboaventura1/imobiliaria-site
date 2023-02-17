
let open = $('#menu_open')
let close = $('#menu_close')

$('#menu_open').click(function(){
    open.stop().fadeOut().css('display','none')
    close.stop().fadeIn().css('display','block')

    $('.menu_mobile ul').slideToggle()
})

$('#menu_close').click(function(){
    open.stop().fadeIn().css('display','block')
    close.stop().fadeOut().css('display','none')

    $('.menu_mobile ul').slideToggle()
})