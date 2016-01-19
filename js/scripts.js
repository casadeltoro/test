$(document).ready(function(){
	$('.carousel_blog').slick({
		  dots: false,
		  infinite: true,
		  speed: 400,
		  fade: true,
		  slidesToShow: 1,
		  adaptiveHeight: true
		});
		
	$('.header_slider').slick({
		  dots: false,
		  infinite: true,
		  speed: 400, 
		  slidesToShow: 1,
		  adaptiveHeight: true
		});
	$("a[href$='.jpg']").fancybox();
	$('.sert_carousel').slick({
		  dots: false,
		  infinite: true,
		  speed: 400,
		  fade: false,
		  slidesToShow: 5,
		  adaptiveHeight: true,
		  responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 3, 
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				  ]
		});
		
		$('.gallary_carousel').slick({
		  dots: false,
		  infinite: true,
		  speed: 400,
		  fade: false,
		  slidesToShow: 3,
		  adaptiveHeight: true,
		  responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 3, 
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }

					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				  ]
		});
	$(".tab_link").on("click",function(e){
		e.preventDefault();
		var data_load = $(this).attr("data-show");
		var old_data = $(".active_tab_link").attr("data-show");
		$(".tab_link").removeClass("active_tab_link");
		$(this).addClass("active_tab_link");
		$("."+old_data).hide();
		$("."+data_load).fadeIn(500);
	});
}); 