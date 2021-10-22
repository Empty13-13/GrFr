//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

let slider_about = new Swiper('.brands__slider', {

	// effect: 'fade',
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},

	observer: true,
	observeParents: true,
	slidesPerView: 5,
	spaceBetween: 40,
	autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.brands__slider-next',
		prevEl: '.brands__slider-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	},

	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});

let slider_advantages = new Swiper('.advantages__slider', {

	// effect: 'fade',
	// autoplay: {
	// 	delay: 2000,
	// 	disableOnInteraction: false,
	// },

	observer: true,
	observeParents: true,
	slidesPerView: 3,
	spaceBetween: 20,
	autoHeight: true,
	speed: 800,
	centeredSlides: true,
	initialSlide: 1,
	width: 1180,
	//touchRatio: 0,
	//simulateTouch: false,
	// loop: true,
	//preloadImages: false,
	//lazy: true,

	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},

	// Arrows
	// navigation: {
	// 	nextEl: '.brands__slider-next',
	// 	prevEl: '.brands__slider-prev',
	// },
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
			width: 280,
			autoHeight: false,

			pagination: {
				el: '.advantages__pagination',
				clickable: true,
			}
		},
		479: {
			slidesPerView: 1,
			spaceBetween: 20,
			autoHeight: true,
			width: 380,

			pagination: {
				el: '.advantages__pagination',
				clickable: true,
			}
		},
		1180: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 10,
			centeredSlides: false,

		},
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});
