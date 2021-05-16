

$( document ).ready(function() {

    // customize share_text labels of social media buttons in footer
    var checkExistFacebook = setInterval(function() {
        if ($('.facebook .share_text').length) {
            $('.facebook .share_text').text('Facebook');
            clearInterval(checkExistFacebook);
        }
    }, 100); // check every 100ms
    var checkExistTwitter = setInterval(function() {
        if ($('.twitter .share_text').length) {
            $('.twitter .share_text').text('Twitter');
            clearInterval(checkExistTwitter);
        }
    }, 100); // check every 100ms
    var checkExistMail = setInterval(function() {
        if ($('.mail .share_text').length) {
            $('.mail .share_text').text('E-Mail');
            clearInterval(checkExistMail);
        }
    }, 100); // check every 100ms

    if ($.trim($('.result-block').html()) != '') {
        $('.informmain-content.content-full .entdecken-intro').hide();
    }

    if(Cookies.get('inform_kontrast')){
        $('body').addClass('kontrast');
    }

    if($('.content-startseite').length) initStartseite();


    preloadBigImages();
    initAccordion();
    initCarousel();

    if($('#tx-solr-search').length) initSolrEvents();

    initGlobalGridEvents();

    $('header a.menu-open').click(function() {
        $('<div/>', { class:'mobile-whited' }).appendTo('body');
        $('<a />', { class:'close-mobile-menu', href: 'javascript:;', title:'menü schließen', html:'<span class=\'inform-cross\'></span>' }).appendTo('body');
        $('body').addClass('mobile-menu-open');

        $('.mobile-whited').fadeTo(600,1, function() {
            $('body').addClass('mobile-show');
        });
    });

    $(document).on("click","a.close-mobile-menu",function(event) {
        $('body').removeClass('mobile-menu-open').removeClass('mobile-show');
        $('.mobile-whited').remove();
        $('a.close-mobile-menu').remove();
    });


    $('iframe').each(function(){
        if(!$(this).parent('.embed-container').length) {
            $(this).wrap('<div class="embed-container"></div>');
        }
    });


    var termineWrap = $('.termine-outer');
    if($(termineWrap).length) {
        $(termineWrap).pajinate({
            items_per_page : 4,
            nav_label_prev: 'zurück',
            nav_label_next: 'weiter',
            item_container_id : '.list-view',
            nav_panel_id : '.pagination'

        });

        $(document).on("click", $(termineWrap).find('.pagination a'),function(event) {
            $('html:not(:animated), body:not(:animated)').animate({ scrollTop: $(termineWrap).offset().top }, 'slow');
        });

    }


    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('a.button-back-top').fadeIn();
        } else {
            $('a.button-back-top').fadeOut();
        }
    });

    $('a.button-back-top').click(function () {
        $('html:not(:animated), body:not(:animated)').animate({ scrollTop: 0 }, 'slow');
    });





    $('footer a.kontrastversion').click(function () {
        if($('body').hasClass('kontrast')) {
            Cookies.remove('inform_kontrast');
            $('body').removeClass('kontrast')
        }else {
            Cookies.set('inform_kontrast', 1, { expires: 365 });
            $('body').addClass('kontrast');
        }
    });


    var vdesc = $('.verteilserseite-dsc');
    if($(vdesc).length) {
        $(vdesc).appendTo($('.main-content-col'));
    }
	
	if ($('.seiten-einstieg').hasClass('white')) {
		$('div.content-verteilerseite.content-verteilerseite-top').addClass('white');
	}

    //click enlarge
    //test if it can be replaced completely

    $('a.lightbox').each(function() {
            $(this).magnificPopup({
                delegate: 'img',
                type: 'image',

                gallery: {
                    enabled: false
                },
                callbacks: {
                    elementParse: function(qw) {
                        qw.src = qw.el.parent().find('img.magnifier').attr('data-original-path');
                    }
                },
                image: {
                    titleSrc: function(item) {
                        return item.el.parent().parent().find('.image-caption').text();
                    }
                }
            });
    });

    $('figure.lightbox, div.hinweis-image-preWrap.lightbox').magnificPopup({
        delegate: 'img',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        image: {
            titleSrc: function(item) {
                return item.el.parent().parent().find('.image-caption').text();
            }
        },
        gallery: {
            enabled: false
        },
        callbacks: {
            elementParse: function(qw) {
                qw.src = qw.el.closest('.image-preWrap').attr('data-original-path');
                console.log(qw.src,'qw.src');
            }
        },
    });

	// ############################### solr facette grouping START ###############################

    // setup Start
    if($('#tx-solr-search').hasClass('ident-netzwerk-projekte') || $('#tx-solr-search').hasClass('ident-netzwerk-akteure')){
        $('.facet.facet-type.facet-type-options.panel-group').hide();
    }

    $('.filter-select-group .label-wrap a').click(function(){
        var target =  $('#facet-accordion-' + $(this).data('facet'));
        var aktivesPanel = $('.facet.facet-type.facet-type-options.panel-group.aktiv');
        var aktivesLabel = $('#tx-solr-faceting .catGrpSelect.aktiv');

        if(target.attr('id') === aktivesPanel.attr('id')){
            target.removeClass('aktiv').hide();
            $(this).removeClass('aktiv');
        }else{
            aktivesPanel.removeClass('aktiv').hide();
            aktivesLabel.removeClass('aktiv');
            $(this).addClass('aktiv');
            target.addClass('aktiv').show();
        }
    });
    // ############################### ENDE solr facette grouping ###############################

    $('.title.Sonstiges  span.countItems').prepend($('.sonstigesResultCounter').data('sonstigesresultcounter'));


});



$(function() {

});










function initStartseite() {
    var introTop = $('.startseiten-intro .intro-top');
    if($(introTop).attr('data-preload') != "" && $(introTop).attr('data-mobile')) {
        var preLoad = [$(introTop).attr('data-preload'),$(introTop).attr('data-mobile')];

        $.each(preLoad, function(index, value) {
            var imgLarge = new Image();
            imgLarge.src = value;
            imgLarge.classList.add('img-responsive-scale');
            imgLarge.classList.add('intro-bg');
            if(index==0) {
                imgLarge.classList.add('hidden-sm');
                imgLarge.classList.add('hidden-xs');
            }else {
                imgLarge.classList.add('hidden-md');
                imgLarge.classList.add('hidden-lg');
            }

            $('div.content-startseite-top .bgImgWrap').prepend(imgLarge);

            // TabletH-Dekstop
            if(__device >= 3 && index == 0) {
                imgLarge.onload = function () {

                    $('.startseiten-intro').find('.loader').fadeOut('fast');
                    $(imgLarge).fadeTo(1600, 0.2, function() {
                        $('div.content-startseite-top img.intro-bg').css('opacity',0.2);
                        $('.startseiten-intro').find('.intro-text .fade').addClass('in');
                    });
                };
            }else {
                // Mobil TabletV
                if(index == 1) {
                    imgLarge.onload = function () {
                        $('.startseiten-intro').find('.loader').fadeOut('fast');
                        $(imgLarge).fadeTo(1600, 0.2, function() {
                            $('div.content-startseite-top img.intro-bg').css('opacity',0.2);
                            $('.startseiten-intro').find('.intro-text .fade').addClass('in');
                        });
                    };
                }
            }


        });




    }

}



function preloadBigImages() {
    $('div.image-preWrap').each(function() {
        var imgPre = $(this).find('img');
        var imgLarge = new Image();
        imgLarge.src = $(this).attr('data-large');
        imgLarge.alt = $(imgPre).attr('alt');
        imgLarge.title = $(imgPre).attr('title');
        imgLarge.classList.add('loaded');
        imgLarge.classList.add('img-responsive');

        $(this).find('figure').prepend(imgLarge);

        imgLarge.onload = function () {
            $(imgLarge).fadeTo(200, 1, function() {
                $(this).css('position', 'static');
                $(imgPre).remove();

                if($('.grid').length) {
                    $('.grid').masonry();
                }

            });
        };

    });



}



function initAccordion() {

    $('.t3ddy-accordion').each(function() {
        var $accordionContainer = $(this);

        var heightStyle = 'auto';
        if ($accordionContainer.hasClass('height-style-fill')) {
            heightStyle = 'fill';
        } else if ($accordionContainer.hasClass('height-style-content')) {
            heightStyle = 'content';
        }

        $accordionContainer.accordion({
            active: getActiveItemIndex($accordionContainer),
            heightStyle: heightStyle,
            collapsible: true,
            icons: {"header": "inform-icon_open", "activeHeader": "inform-icon_close"},
            activate: function(event, ui) {
                if(!$.isEmptyObject(ui.newHeader.offset())) {
                    $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top }, 'slow');
                }
            },
            beforeActivate: function(event, ui) {

                if ($accordionContainer.hasClass('single-page-mode')) {
                    return true;
                }

                // The accordion believes a panel is being opened
                if (ui.newHeader[0]) {
                    var currHeader  = ui.newHeader;
                    var currContent = currHeader.next('.ui-accordion-content');
                    // The accordion believes a panel is being closed
                } else {
                    var currHeader  = ui.oldHeader;
                    var currContent = currHeader.next('.ui-accordion-content');
                }
                // Since we've changed the default behavior, this detects the actual status
                var isPanelSelected = currHeader.attr('aria-selected') == 'true';

                // Toggle the panel's header
                currHeader.toggleClass('ui-corner-all',isPanelSelected).toggleClass('accordion-header-active ui-state-active ui-corner-top',!isPanelSelected).attr('aria-selected',((!isPanelSelected).toString()));

                // Toggle the panel's icon
                currHeader.children('.ui-icon').toggleClass('ui-icon-triangle-1-e',isPanelSelected).toggleClass('ui-icon-triangle-1-s',!isPanelSelected);

                // Toggle the panel's content
                currContent.toggleClass('accordion-content-active',!isPanelSelected)
                if (isPanelSelected) { currContent.slideUp(); }  else { currContent.slideDown(); }


                return false; // Cancel the default action
            }
        });
    });


}

function getActiveItemIndex($container) {
    var activeItemIndex = 0;
    if ($container.find('.t3ddy-item.focus').length > 0) {
        activeItemIndex = $container.find('.t3ddy-item').index($container.find('.t3ddy-item.focus').eq(0));
    }
    if (location.hash) {
        var $anchoredContentElement = $container.find(location.hash);
        var parentT3ddyItem = $anchoredContentElement.closest('.t3ddy-item');
        activeItemIndex = $container.find('.t3ddy-item').index(parentT3ddyItem);
    }

    if(activeItemIndex === 0) {
        if ($container.hasClass('leave-all-items-closed')) {
            activeItemIndex = false;
        }
    }

    return activeItemIndex;
}




function initCarousel() {
    
    if($(".owl-carousel.owl-single").length) {
        $(".owl-carousel.owl-single").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            navigationText: ["<img title=\"zurück\" src=\"/typo3conf/ext/ig_project/Resources/Public/Images/left.svg\" height=\"30\" width=\"30\" />",
                "<img title=\"weiter\" src=\"/typo3conf/ext/ig_project/Resources/Public/Images/right.svg\" height=\"30\" width=\"30\" />"]
        });
    }

    if($(".owl-carousel.owl-serie").length) {
        $(".owl-carousel.owl-serie").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            center: true,
            loop:true,
            items:3,
            paginationSpeed : 400,
            itemsCustom : [
                [0, 1],
                [600, 2],
                [1300, 3]
            ],
            navigationText: ["<img title=\"zurück\" src=\"/typo3conf/ext/ig_project/Resources/Public/Images/left.svg\" height=\"30\" width=\"30\" />",
                "<img title=\"weiter\" src=\"/typo3conf/ext/ig_project/Resources/Public/Images/right.svg\" height=\"30\" width=\"30\" />"]
        });

    }






}



function initGlobalGridEvents() {


    $(document).on("mouseenter","div.grid-item",function(event) {
        $(event.currentTarget).addClass('hover');
        $('div.grid-item').not($(event.currentTarget)).addClass('hide-grid');
    });


    $(document).on("mouseleave","div.grid-item",function(event) {
        $('div.grid-item').removeClass('hover').removeClass('hide-grid');
    });


    var zutatenWrap = $('.content-rezeptseite .zutatenwrap');
    if($(zutatenWrap).length) {
        if($(zutatenWrap).find('.zutaten-list').length == 1)  {
            $(zutatenWrap).find('.col').addClass('col-sm-offset-6');
        }
    }




}




function initSolrEvents() {


    var searchInput = $('input.tx-solr-q');
    $(searchInput).focus(function() {
       $(this).parent('.search-input').addClass('focus');
    });
    $(searchInput).blur(function() {
        $(this).parent('.search-input').removeClass('focus');
    });

    // if IE11, set focus
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
    if(isIE11){
        searchInput.focus();
    }

        $(".result-block .owl-carousel").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            center: true,
            loop:true,
            items:3,
            paginationSpeed : 400,
            itemsCustom : [
                [0, 1],
                [600, 3]
            ],
            navigationText: ["<img title=\"zurück\" src=\"/typo3conf/ext/ig_project/Resources/Public/Images/left.svg\" height=\"30\" width=\"30\" />",
                "<img title=\"weiter\" src=\"/typo3conf/ext/ig_project/Resources/Public/Images/right.svg\" height=\"30\" width=\"30\" />"]
        });

}