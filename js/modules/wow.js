import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

function animation() {
	let wow = new WOW({
		boxClass: "wow",
		animateClass: "animate__animated",
		offset: 0,
		mobile: true,
		live: true,
		callback: function (box) {
			if (box.classList.contains("creative-space")) {
				const swiper = new Swiper(".creative-space__container", {
					slidesPerView: getSlidesPerView(),
					spaceBetween: 8,
					initialSlide: 3,
					centeredSlides: true,
					loop: true,
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
					},
					on: {
						slideChange: function () {
							const currentSlide = this.slides[this.activeIndex];
							const video = currentSlide.querySelector("video[data-src]");
							const sound = currentSlide.querySelector(".sound-toggle");
							if (video) {
								video.setAttribute("src", video.getAttribute("data-src"));
								sound.style.display = "block";
								video.removeAttribute("data-src");
							}
						},
						resize: function () {
							this.params.slidesPerView = getSlidesPerView();
							this.update();
						},
					},
				});
			}

			if (box.classList.contains("move-it")) {
				const resize = document.querySelector(".slider__resize");
				const divider = document.querySelector(".slider__divider");
				if (resize) {
					resize.style.animation = "sliderAnimation 5s linear";
					setTimeout(() => {
						divider.style.opacity = "1";
					}, 5000);
				}
			}

			if (box.classList.contains("feedback")) {
				const swiper = new Swiper(".feedback__slider-container", {
					slidesPerView: 1,
					centeredSlides: true,
					spaceBetween: 30,
					modules: [Navigation, Pagination],
					pagination: {
						el: ".feedback__pagination",
						clickable: true,
					},
					navigation: {
						nextEl: ".feedback-button-next",
						prevEl: ".feedback-button-prev",
					},
					on: {
						init: function () {
							const currentSlide = this.slides[this.activeIndex];
							const iframe = currentSlide.querySelector("iframe[data-src]");
							if (iframe) {
								iframe.setAttribute("src", iframe.getAttribute("data-src"));
								iframe.removeAttribute("data-src");
							}
						},
						slideChange: function () {
							const currentSlide = this.slides[this.activeIndex];
							const iframe = currentSlide.querySelector("iframe[data-src]");
							if (iframe) {
								iframe.setAttribute("src", iframe.getAttribute("data-src"));
								iframe.removeAttribute("data-src");
							}
						},
					},
				});
			}
			if (box.classList.contains("backstages")) {
				const swiper = new Swiper(".backstages__container", {
					slidesPerView: 1,
					centeredSlides: true,
					spaceBetween: 30,
					modules: [Navigation, Pagination],
					pagination: {
						el: ".backstages__pagination",
						clickable: true,
					},
					simulateTouch: true,
					touchEventsTarget: "wrapper",
					on: {
						init: function () {
							handleSlideChange(this);
						},
						slideChange: function () {
							handleSlideChange(this);
						},
					},
				});

				const observer = new IntersectionObserver(
					(entries) => {
						entries.forEach((entry) => {
							if (entry.isIntersecting) {
								// Блок появился на экране - запускаем видео
								handleSlideChange(swiper);
							} else {
								// Блок вышел с экрана - останавливаем видео
								stopActiveSlideVideo(swiper);
							}
						});
					},
					{
						threshold: 0.5,
					},
				);

				observer.observe(box);
			}
		},
	});

	wow.init();
}

// Вспомогательная функция для определения количества слайдов на экране
function getSlidesPerView() {
	const screenWidth = window.innerWidth;
	if (screenWidth <= 768) {
		return 1.5;
	} else if (screenWidth > 768 && screenWidth < 1200) {
		return 3;
	} else {
		return 3.8;
	}
}

// Обработка смены слайдов
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
				// setTimeout(() => {
				// 	iframe.src = dataSrc;
				// }, 200);
			}
		}
	});
}

// Воспроизведение видео на активном слайде при появлении блока на экране
// function playActiveSlideVideo(swiper) {
// 	const activeSlide = swiper.slides[swiper.activeIndex];
// 	const iframe = activeSlide.querySelector(".video-iframe");

// 	if (iframe) {
// 		const dataSrc = iframe.getAttribute("data-src");
// 		if (dataSrc) {
// 			iframe.src = dataSrc + "&autoplay=1";
// 		} else {
// 			iframe.src = "";
// 			// setTimeout(() => {
// 			// 	iframe.src = dataSrc;
// 			// }, 100);
// 		}
// 	}
// }

// Остановка видео на активном слайде при скрытии блока с экрана
function stopActiveSlideVideo(swiper) {
	const activeSlide = swiper.slides[swiper.activeIndex];
	const iframe = activeSlide.querySelector(".video-iframe");

	if (iframe) {
		iframe.src = "";
	}
}

export default animation;
