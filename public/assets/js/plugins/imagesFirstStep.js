
$(document).ready(function(){
    // resize of images
    if 	( $(window).width() >= 768 ){
        $('.wraperImage').addClass('col-sm-3')
    }

    $( window ).resize(function() {
            if 	( $(window).width() >= 768 ){
                    $('.wraperImage').addClass('col-sm-3')
            }
            else {
                $('.wraperImage').removeClass('col-sm-3')
            }
    })

// select image
    $(".img-thumb").click(function(){
        $('.img-thumb').removeClass('selected')
$(this).addClass("selected")
});
});