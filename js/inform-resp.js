var __device; // 1=XS; 2=SM, 3=MD, 4=LG


$( document ).ready(function() {

    $(window).resize(function() {
        var wi = $(window).width();

        initResponisve();
        if (wi >= 768){ initTablitV(); }
        if (wi >= 980){ initTablitH(); }
        if (wi >= 1170){ initTablitDesktop(); }
    });

    $(window).trigger("resize");
    $(window).trigger('scroll');

});




$(function() {
    $(window).trigger("resize");
    $(window).trigger('scroll');
});



function initResponisve() {
    __device = 1;

    $('.startseiten-teaser-second, .startseiten-teaser-first').find('.teaser.grid-item').css('height', 'auto');
}


function initTablitV() {
    __device = 2;

}

function initTablitH() {
    __device = 3;
}

function initTablitDesktop() {
    __device = 4;

    if($('.content-startseite').length) {
        var teaserParent = $('.startseiten-teaser-second, .startseiten-teaser-first').find('.row');
        $.each(teaserParent, function( index, value ) {
            var maxHeight = 0;
            $($(value).find('.teaser.grid-item')).each(function(){
                $(this).attr('style', '');
                if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
            });
            $(value).find('.teaser.grid-item').css('height', maxHeight);
        });
    }

    setTimeout(function(){ $(window).trigger("resize"); }, 500);

    if($('.grid-top3').length) {
        updateHeightTop3Teaser();
    }

}



function updateHeightTop3Teaser() {
    var teaserParent = $('.grid-top3').find('.row');
    $.each(teaserParent, function( index, value ) {
        var maxHeight = 0;
        $($(value).find('.top-grid-item')).each(function(){
            $(this).attr('style', '');
            if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });
        $(value).find('.top-grid-item').css('height', maxHeight);
    });
}







