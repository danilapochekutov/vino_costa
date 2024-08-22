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
								handleSlideChange(swiper);
							} else {
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
			if (box.classList.contains("offer__slider")) {
				animateSlider();
			}
			if (box.classList.contains("reviews__container")) {
				const viewMoreContent = document.querySelectorAll(".view");
				viewMoreContent.forEach((content) => {
					content.classList.add("animate__animated", "animate__fadeInLeft");
				});
			}
			if (box.classList.contains("nfts")) {
				const resize = document.querySelector(".nfts__resize");
				const divider = document.querySelector(".nfts__divider");
				const title = document.querySelector(".nfts__title--white");
				if (resize) {
					resize.style.animation = "sliderAnimation 5s linear";
					title.style.animation = "titleAnimation 5s linear";
					setTimeout(() => {
						divider.style.opacity = "1";
					}, 5000);
				}
			}
			if (box.classList.contains("animation-go")) {
				const text = document.querySelector(".guarantee__text span");
				if (text) {
					text.classList.add("type");
				}

				const textMin = document.querySelector(".guarantee__text-min span");
				if (textMin) {
					textMin.classList.add("type");
				}
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
				setTimeout(() => {
					iframe.src = dataSrc;
				}, 200);
			}
		}
	});
}

// Остановка видео на активном слайде при скрытии блока с экрана
function stopActiveSlideVideo(swiper) {
	const activeSlide = swiper.slides[swiper.activeIndex];
	const iframe = activeSlide.querySelector(".video-iframe");

	if (iframe) {
		iframe.src = "";
	}
}

// Анимация ползунка
function animateSlider() {
	const sliderInput = document.getElementById("sliderInput");
	const rightValue = document.getElementById("rightValue");
	const emojiImage = document.getElementById("emojiImage");

	let startValue = parseInt(sliderInput.value);
	const endValue = parseInt(sliderInput.max);

	// Анимация ползунка
	function animate() {
		if (startValue < endValue) {
			startValue += 50; // скорость увеличения
			sliderInput.value = startValue;
			rightValue.textContent = startValue.toLocaleString("en-US");

			// Изменение изображения эмодзи
			if (startValue >= 1000 && startValue < 2000) {
				emojiImage.src = "./icons/offer/1-2.svg";
			} else if (startValue >= 2000 && startValue < 5000) {
				emojiImage.src = "./icons/offer/2-5.svg";
			} else if (startValue >= 5000 && startValue < 7000) {
				emojiImage.src = "./icons/offer/5-7.svg";
			} else if (startValue >= 7000 && startValue <= 10000) {
				emojiImage.src = "./icons/offer/7-10.svg";
			}

			requestAnimationFrame(animate);
		}
	}

	requestAnimationFrame(animate);
}

export default animation;
