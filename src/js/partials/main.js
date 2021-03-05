$(document).ready(function(){
    $('.new_b-slider').slick({
        infinite:false,
    });
    $('.new_specialists-slider').slick({
        infinite:false,
    });
    $('.new_reviews-slider').slick({
        infinite:false,
    });
    $('.new_team-slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        infinite:false,
        responsive: [
            {
              breakpoint: 999,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    });

    $('[data-fancybox]').fancybox({
		touch: false,
		scrolling: 'no',
		beforeShow: function(){
			$("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
			$("body").css({'overflow-y':'visible'});
		}
	});

    $('.new_text_block-mobile-link').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.new_text_block-smarl_mobile p').show();
    });

    $('.new_treatment-block-heading').click(function(e){
        e.preventDefault();

        if($(window).width() < 701){
            const $this = $(this);
            const $item = $(this).parent('.new_treatment-block');
            const $text = $this.siblings('.new_text_block-texts');
            if(!$item.hasClass('is-active')){
                $('.new_treatment-block').removeClass('is-active');
                $('.new_text_block-texts').slideUp(200);
                $item.addClass('is-active');
                $text.slideDown(200);
            } else{
                $item.removeClass('is-active');
                $text.slideUp(200);
            }
        }
    })
})