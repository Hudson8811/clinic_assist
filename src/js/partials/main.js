$(document).ready(function(){
    $('.new_b-slider').slick();
    $('.new_specialists-slider').slick();
    $('.new_reviews-slider').slick();
    $('.new_team-slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        infinite:false,
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
})