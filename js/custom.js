var swiper = new Swiper('#swiper_fav', {
         slidesPerView: 'auto',
		       lazy: {
        //  tell swiper to load images before they appear
        loadPrevNext: true,
        // amount of images to load
      	loadPrevNextAmount: 2,
      },
	  
      spaceBetween: 30,


			 scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      }

    });


    var galleryTop = new Swiper('.gallery-top', {
		
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
      
    });
var swiper = new Swiper('#swiper_menu', {
 slidesPerView: 4,
      spaceBetween: 0,
		 scrollbar: {
        el: '.swiper-scrollbar',
		hide: true,
      },breakpoints: {
        640: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
	  }}
});
var swiper = new Swiper('#swiper_fit', {
	 lazy: {
        //  tell swiper to load images before they appear
        loadPrevNext: true,
        // amount of images to load
      	loadPrevNextAmount: 0,
      },
	  lazy: {
        //  tell swiper to load images before they appear
        loadPrevNext: true,
        // amount of images to load
      	loadPrevNextAmount: 2,
      },
	    slidesPerView: 3,
        spaceBetween: 75,
		scrollbar: {
        el: '.swiper-scrollbar',
		hide: true,
      }
});
var swiper = new Swiper('#recipes_recent', {
	 lazy: {
        //  tell swiper to load images before they appear
        loadPrevNext: true,
        // amount of images to load
      	loadPrevNextAmount: 0,
      },
	  lazy: {
        //  tell swiper to load images before they appear
        loadPrevNext: true,
        // amount of images to load
      	loadPrevNextAmount: 2,
      },breakpoints: {
        140: {
          slidesPerView: 4,
          spaceBetween: 100,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 100,
        },
        1024: {
          slidesPerView: 7,
          spaceBetween: 80,
	  }},
       spaceBetween: 80,
		scrollbar: {
        el: '.swiper-scrollbar',
		hide: true,
      }
});
$('#toggle-dark2').on('change', function () {
  if ($('#toggle-dark2').prop('checked') == true) {
     $('body').removeClass('white-skin');
	 $('body').addClass('black-skin'); 
	 setCookie('darkmode','darkmode',9999);


  } else {
	 $('body').removeClass('black-skin');
	 $('body').addClass('white-skin'); 
    deleteCookie("darkmode");
	
  }
});

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


 function deleteCookie(name) {
        setCookie(name, "", null , null , null, 1);
    }
	
var x = getCookie('darkmode');
if (x) {
    $('body').addClass('black-skin'); 
	$('body').removeClass('white-skin');
}
$('#breadcrumbs a').addClass('external'); 
  $('.lazy').Lazy({
        
        effect: 'fadeIn',
        visibleOnly: true
        
    });




$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('body').height()) + ($('footer').height()) - 500;

   

    // ao dar rolagem
    window.onscroll = function(){
        var scroll = window.scrollY /10;

        $('.img-parallax').css({
            'top' : '-' + scroll + 'px'
        });
   
        $('.img-parallax').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });

        
    }
});



 $('.single-ingredients li').each(function(index){
    var delayNumber = index * 100;
   $(this).attr({ "data-aos":"fade-left", "data-aos-delay":delayNumber } );
 });
 $('.ingredients-list li').each(function(index){
    var delayNumber = index * 100;
   $(this).attr({ "data-aos":"fade-left", "data-aos-delay":delayNumber } );

 });
 
AOS.init({
  offset: 50,
  once: true
});
$(window).on('load', function() {
  AOS.refresh();
});
$(function(){
  $("#image img").on("click",function(){
     var src = $(this).attr("src");
     $(".modal-img").prop("src",src);
  })
})
$("#fs").change(function() {
    $('body').css("font-family", $(this).val());
});

$("#sizemin").change(function() {
    $('body').css("font-size", $(this).val() + "rem");
	 setCookie('fontsize','size1',9999);
});
$("#sizenormal").change(function() {
    $('body').css("font-size", $(this).val() + "rem");
	 setCookie('fontsize','size2',9999);
});
$("#sizebig").change(function() {
    $('body').css("font-size", $(this).val() + "rem");
	 setCookie('fontsize','size3',9999);
});

var y = getCookie('fontsize');
if (y == "size3") {
    $('body').addClass('sizebig'); 
}else if (y == "size1"){
	$('body').addClass('sizemin'); 
}else{
	
}





var x = getCookie('darkmode');
if (x) {
    

  $('.btn__background').addClass('color');
  $('.sun-box').addClass('move');
  $('.moon-box').addClass('move');
  
  $('.btn__face').addClass('move');
  $('.btn__eye-left, .btn__eye-right').addClass(function(){
    return $(this).is('.open, .close') ? 'open close' : 'close';
  });
  $('.btn__mouth').addClass('close');
  
  $('.btn__animation').addClass(function(){
    return $(this).is('.move-reverse, .move') ? 'move-reverse move' : 'move';
  });

}
  
   $(".nav-tabs").swipe( {
     swipeLeft:function(event, direction, distance, duration, fingerCount) {
          $(".nav-tabs a.active").next('a').find('a').tab('show');
        },
     swipeRight:function(event, direction, distance, duration, fingerCount) {
          $(".nav-tabs a.active").prev('a').find('a').tab('show');
        },
  });



$('.btn__background').on('click', function() {



  $('.btn__background').toggleClass('color');
  $('.sun-box').toggleClass('move');
  $('.moon-box').toggleClass('move');
  
  $('.btn__face').toggleClass('move');
  $('.btn__eye-left, .btn__eye-right').toggleClass(function(){
    return $(this).is('.open, .close') ? 'open close' : 'close';
  });
  $('.btn__mouth').toggleClass('close');
  
  $('.btn__animation').toggleClass(function(){
    return $(this).is('.move-reverse, .move') ? 'move-reverse move' : 'move';
  });
  
});
$('.more-share-button').on('click', function() {
  $('.more-share').toggleClass('active');
 });
$('.single-ingredients ul li').click(function() {
    $(this).toggleClass('ingredients-check');

});


$("#search-tab").click(function() {
    $('html, body').animate({
        scrollTop: $("#searchbox").offset().top - 70
    }, 1000);
});
$("#komentarze").click(function() {
    $('html, body').animate({
        scrollTop: $("#comments").offset().top - 70
    }, 1000);
});
$("#powiazane-tab").click(function() {
    $('html, body').animate({
        scrollTop: $("#box_ingredients").offset().top - 70
    }, 1000);
});
$("#skladniki-tab").click(function() {
    $('html, body').animate({
        scrollTop: $("#ingredients-desc").offset().top - 70
    }, 1000);
});
$('#ustawienia-tab').click(function() {
    $('#ustawienia').toggleClass('settings_active');
});
$('.settings_page_module_close').click(function() {
    $('#ustawienia').toggleClass('settings_active');
});







