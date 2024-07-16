function sliderIframe(slider1, slider2) {
	const cryptoPioneer = document.querySelector(slider1);

	Object.assign(cryptoPioneer, {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 30,
		pagination: {
			el: ".crypto-pioneer__pagination",
			clickable: true,
		},
	});

	cryptoPioneer.initialize();

	const backstages = document.querySelector(slider2);

	Object.assign(backstages, {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 30,
		pagination: {
			el: ".backstages__pagination",
			clickable: true,
		},
		simulateTouch: true,
		touchEventsTarget: "wrapper",
		on: {
			slideChange: function () {
				handleSlideChange(this);
			},
		},
	});

	backstages.initialize();

	const feedback = document.querySelector(".feedback__slider-container");

	Object.assign(feedback, {
		slidesPerView: 1,
		centeredSlides: true,
		spaceBetween: 30,
		pagination: {
			el: ".feedback__pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".feedback-button-next",
			prevEl: ".feedback-button-prev",
		},
	});

	feedback.initialize();

	function handleSlideChange(swiper) {
		const allSlides = swiper.slides;
		allSlides.forEach((slide, index) => {
			const iframe = slide.querySelector(".video-iframe");
			if (iframe) {
				const dataSrc = iframe.getAttribute("data-src");
				if (index === swiper.activeIndex) {
					iframe.src = dataSrc + "&autoplay=1";
				} else {
					iframe.src = "";
					setTimeout(() => {
						iframe.src = dataSrc;
					}, 100);
				}
			}
		});
	}

	function initIntersectionObserver() {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		};

		function observerCallback(entries, observer) {
			entries.forEach((entry) => {
				// const firstSlide = backstages.querySelector(".first-slide");
				const activeSlide = backstages.querySelector(".swiper-slide-active .video-iframe");

				if (entry.isIntersecting) {
					if (activeSlide) {
						const dataSrc = activeSlide.getAttribute("data-src");
						if (dataSrc) {
							activeSlide.src = dataSrc + "&autoplay=1";
						}
					}
				} else {
					if (activeSlide) {
						activeSlide.src = "";
						setTimeout(() => {
							if (activeSlide) {
								activeSlide.src = activeSlide.getAttribute("data-src");
							}
						}, 100);
					}
				}
			});
		}

		const observer = new IntersectionObserver(observerCallback, observerOptions);
		const target = document.querySelector(".backstages");
		observer.observe(target);
	}

	initIntersectionObserver();
}

export default sliderIframe;
