import Swiper from "swiper";

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
						delay: 10000,
						disableOnInteraction: true,
					},
					on: {
						slideChange: function () {
							// Загрузка видео для текущего активного слайда
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
							swiper.params.slidesPerView = getSlidesPerView();
							swiper.update();
						},
					},
				});
			}
			function getSlidesPerView() {
				// Определение количества слайдов в зависимости от ширины экрана
				const screenWidth = window.innerWidth;
				if (screenWidth <= 768) {
					return 1.5;
				} else if (screenWidth >= 768 && screenWidth < 1200) {
					return 3;
				} else {
					return 3.8;
				}
			}
			if (box.classList.contains("move-it")) {
				const resize = document.querySelector(".slider__resize");
				if (resize) {
					resize.style.animation = "sliderAnimation 10s linear infinite";
				}
			}
		},
	});

	wow.init();
}

export default animation;
