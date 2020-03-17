$(function(){
    $('.nav-control').on('click',function(){
        $('nav').addClass('expanded')
    })

    $('.nav-container').on('click',function(){
        $('nav').removeClass('expanded')
    })


    //sticky menu----------------
	var menuOffset = $(window).height() - 300;

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
		spaceBetween: 0,
		speed: 1000,
		loop: true,
		preloadImages:true,
		effect:'fade',
		fadeEffect: {
		  crossFade: true
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	//video

	var videoPlayer = document.querySelector('.avModal-content');

	$('#avModal').on('shown.bs.modal', function () {
		// Auto play, half volume.
		videoPlayer.play()
		videoPlayer.volume = 0.5;
	})
	$('#avModal').on('hide.bs.modal', function () {
		// Auto play, half volume.
		videoPlayer.pause();
        // videoPlayer.firstChild.nodeValue = 'Play';
	})

    

});