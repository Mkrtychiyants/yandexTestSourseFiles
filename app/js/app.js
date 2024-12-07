// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 50,
		// If we need pagination
		pagination: {
		  	el: '.swiper-pagination',
			type: "fraction",
			},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  
		breakpoints: {
			// when window width is >= 375px
				1365: {
			  slidesPerView: 3,
			  slidesPerGroup: 3,
			  spaceBetween: 20
			},
		}

	  });
	
})


var init = false;
var swiper2;
function swiperCard() {
	if (window.innerWidth <= 768) {
		if (!init) {
		init = true;
		swiper2 = new Swiper(".transformation-swiper", {
				direction: "horizontal",
				slidesPerView: 1,
				centeredSlides: true,		
				spaceBetween:20,
				pagination: {
				el: ".swiper-pagination2",
				clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next2',
					prevEl: '.swiper-button-prev2',
					disabledClass: 'swiper-button-disabled2'
				},
			});
		}
		swiper2.navigation.update();
	} else if (init) {
		swiper2.destroy();
		swiper2.navigation.update();
		init = false;
	}
}
swiperCard();



window.addEventListener("resize", swiperCard);

