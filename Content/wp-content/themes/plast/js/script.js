
// page-preloader
$(window).on('load', function () {
	if($(window).width() < 1024) {
		$(".sub-menu").each(function( index ) {
			var mainMenuItem = $(this).parent(".menu-item"); 
			var arrow = jQuery("<div class='open-arrow'><span>▼</span></div>"); 
			$(mainMenuItem).append(arrow);   

		   
			$(arrow).click(function(){
				$(mainMenuItem).find('ul.sub-menu').slideToggle();
				$(arrow).toggleClass("rotate");
			});
		});
	}
	
    $body  = $('body');
    setTimeout (function(){
        $body.addClass('active');
    });

});

$(document).ready(function({}){
	
	$(".go-up-button").on("click", function(){
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});
    // parallax
    //$('.parallax').parallax();

    // menu
    $('.open-nav').click(function(){
        $('.wrap-nav').addClass('open');
        $('.overlay').addClass('open');
    });
    $('.close-nav').click(function(){
        $('.wrap-nav').removeClass('open');
        $('.overlay').removeClass('open');
    });

    // thanks WP
    function func_close() {
        $.fancybox.close();
    }
    document.addEventListener('wpcf7mailsent', function (event) {
        var element=document.getElementById('modal-thanks');
        $.fancybox.close();
        $.fancybox.open(element);
        setTimeout(func_close, 2000);
    }, false);

    //ScrollReveal
	/*
    ScrollReveal().reveal('main .container', {
        scale: 0.8,
        duration: 1500,
        useDelay: 'onload',
        interval: 100,
        mobile: false
    });
	*/
    $(window).resize(function(){
        // headerHeight
        var headerHeight = $('header').outerHeight(true);
        $('main').css({'padding-top':headerHeight});
        // sectionHome
        $('.section-home').css({'margin-top':-headerHeight});
    }).trigger('resize');

    // header fixed
    $(window).scroll(function() {
        var $full = $('header').height();
        if ($(this).scrollTop() > $full){
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });

    // search
    $('.open-search').click(function(){
        $('.search').addClass('active');
    });
    $('.close-search').click(function(){
        $('.search').removeClass('active');
    });

    // team-list
    $('.open-team').click(function(){
        $('.team-list__all').toggleClass('active');
        $(this).toggleClass('active');
    });

    // table
    $('.open-full-table').click(function(){
        $('.table').toggleClass('active');
    });
	
	if($('.table tbody tr').length < 9)  $('.open-full-table').hide();

    // btn hover
    $(function() {
        $('.btn')
            .on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('.btn_decor').css({top:relY, left:relX})
            })
            .on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('.btn_decor').css({top:relY, left:relX})
            });
    });

    // swiperPartners
    var swiper = new Swiper('.swiper-partners', {
        slidesPerView: 'auto',
		loop: true, 
		autoplay: {delay: 1, }, 
		freeMode: true, 
		speed: 5000,
        navigation: {
            nextEl: '.next-partners',
            prevEl: '.prev-partners',
        }
    });
	
	var mySwiperTop = new Swiper('.swiper-top', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		effect: 'fade',

		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},

		speed: 1000,

	});

    // swiperAbout
    var swiper = new Swiper('.swiper-about', {
        pagination: {
            el: '.swiper-pagination-about',
            type: 'fraction'
        },
        spaceBetween: 20,
        speed: 1000,
        navigation: {
            nextEl: '.next-about',
            prevEl: '.prev-about'
        }
    });
	
	
	 var swiper = new Swiper('.swiper-review', {
		effect: 'fade', 
		fadeEffect: {
			crossFade: true
		  },
        spaceBetween: 20,
        speed: 1000,
        navigation: {
            nextEl: '.next-review',
            prevEl: '.prev-review'
        },
		pagination: {
            el: '.swiper-pagination-review',
            type: 'bullets'
        },
    });

    // swiperHistory
    var swiper = new Swiper('.swiper-history', {
        slidesPerView: 4,
        spaceBetween: 50,
        speed: 1000,
        navigation: {
            nextEl: '.next-history',
            prevEl: '.prev-history'
        },
        breakpoints: {
            1250: {
                slidesPerView: 3
            },
            930: {
                slidesPerView: 2
            },
            730: {
                slidesPerView: 1
            }
        }
    });

    // swiperCatalog
    var swiper = new Swiper('.swiper-catalog', {
        slidesPerView: 3,
        spaceBetween: 30,
        scrollbar: {
            el: '.swiper-scrollbar-catalog',
            hide: false
        },
         navigation: {
             nextEl: '.next-catalog',
             prevEl: '.prev-catalog',
         },
        breakpoints: {
            1250: {
                slidesPerView: 2
            },
            410: {
                slidesPerView: 'auto',
                centeredSlides: true
            }
        }
    });

    // swiperProduct
    var swiper = new Swiper('.swiper-product', {
        slidesPerView: 4,
        spaceBetween: 20,
        scrollbar: {
            el: '.swiper-scrollbar-product',
            hide: false
        },
        navigation: {
            nextEl: '.next-product',
            prevEl: '.prev-product',
        },
        breakpoints: {
            930: {
                slidesPerView: 3
            },
            410: {
                slidesPerView: 2
            }
        }
    });

    // niceSelect
    $('select').niceSelect();

    // scroll to block
    $(".wrapper").on("click",".btn-scroll", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    // ajax filter
    $('.category-filter_content').on('click', 'a:not(.active)', function(e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        var data = {
            action: 'filter',
            term_id: $(this).data('filter'),
        };
        $.ajax({
            url: ajaxurl, // обработчик
            data: data, // данные
            type: 'POST', // тип запроса
            success: function(data) {
                if (data) {
                    //console.log(data2);
                    $('.blog-filtered-content').find('.news-preview').remove();
                    $('.blog-filtered-content').append(data);
                }
            }
        });
    });


});

$(document).ready(function ($) {

    document.addEventListener( 'wpcf7mailsent', function( event ) {
		var inputs = event.detail.inputs;
		thankyouPage = getFieldValueByName(inputs, "thankyou-page");
		
		if(thankyouPage) window.location = thankyouPage;
	}, false );
    
});

function getFieldValueByName(ar, name){
	var result = "";
	ar.forEach(function(item) {
		if(item.name == name) result = item.value;
	});
	return result;
}