$(document).ready(function() {

    $(".menu_click").on("click","a", function (event) {
        event.preventDefault();
        $("nav").removeClass("active_menu");
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 20;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(".footer_arr_top a").on("click", function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '800');
    });

    $(".menu_btn").on("click", function(){
        $("nav").toggleClass("active_menu");
    });
    
    $(".close_menu").on("click", function(){
        $("nav").removeClass("active_menu");
    });
    
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
            }
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }
    });

    $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

    $('.phone').on('input', function() {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''));
    });

    $('.name').on('input', function() {
        $(this).val($(this).val().replace(/[0-9,+-_/';:}{}?.<>,()*&^%$#@!]/, ''));
    });


    $('.basis_slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrows: true,
        speed: 650,
        dots: false,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              arrows: false,
              dots: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });

//     var bLazy = new Blazy({
//         breakpoints: [{
//         width: 420,
//         src: 'data-src-small'
// 	}]
//       , success: function(element){
// 	    setTimeout(function(){
// 		var parent = element.parentNode;
// 		parent.className = parent.className.replace(/\bloading\b/,'');
// 	    }, 200);
//         }
//    });

});
