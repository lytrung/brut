$(function(){
    $('.nav-control').on('click',function(){
        $('nav').addClass('expanded')
    })

    $('.nav-container').on('click',function(){
        $('nav').removeClass('expanded')
    })


    //sticky menu----------------
	var menuOffset = $(window).height();

	$(document).on('scroll',function(){

        var scrollTop = $(document).scrollTop();
        

        // if(scrollTop >= menuOffset/2){
		// 	$('nav').addClass('pre-sticky');
		// }else{
		// 	$('nav').removeClass('pre-sticky');
        // }
        
		if(scrollTop >= menuOffset){
			//fix the menu
			$('.nav2').addClass('sticky');
		}else{
			//unfix the menu
			$('.nav2').removeClass('sticky');
		}

	});
	
	// swiper
	  var swiper = new Swiper('.swiper-container', {
		  slidesPerView: 1,
		  spaceBetween: 10,
		  speed: 700,
		  loop: true,
		  autoplay: {
			  delay: 4000,
			  disableOnInteraction: false,
		  },
		  pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
		  },
	  });

});