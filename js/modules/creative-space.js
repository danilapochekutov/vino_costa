function creativeSpace(container) {
	function pauseVideo(video) {
		if (video) {
			video.pause();
			video.currentTime = 0;
		}
	}

	function playVideo(video) {
		if (video) {
			video.play();
		}
	}

	function toggleSound(event) {
		const video = event.target.closest(".creative-space__slide").querySelector("video");
		const img = event.target.closest(".sound-toggle").querySelector("img");
		if (video.muted) {
			video.muted = false;
			img.src = "./icons/creative-space/on.svg";
			img.alt = "unmuted";
		} else {
			video.muted = true;
			img.src = "./icons/creative-space/off.svg";
			img.alt = "muted";
		}
	}

	function manageVideos() {
		const allVideos = document.querySelectorAll(".creative-space__slide video");
		const activeSlide = document.querySelector(".swiper-slide-active video");

		allVideos.forEach((video) => {
			pauseVideo(video);
		});

		playVideo(activeSlide);
	}

	manageVideos();

	const soundButtons = document.querySelectorAll(".sound-toggle");
	soundButtons.forEach((button) => {
		button.addEventListener("click", toggleSound);
	});

	const observer = new MutationObserver(() => {
		manageVideos();
	});

	observer.observe(document.querySelector(container), {
		attributes: true,
		childList: true,
		subtree: true,
	});

	function updateSlidesPerView() {
		const swiperContainer = document.querySelector(".creative-space__container");
		const windowWidth = window.innerWidth;

		if (windowWidth < 768) {
			swiperContainer.setAttribute("slides-per-view", "1.5");
		} else if (windowWidth >= 768 && windowWidth < 1200) {
			swiperContainer.setAttribute("slides-per-view", "3");
		} else {
			swiperContainer.setAttribute("slides-per-view", "3.8");
		}
	}

	window.addEventListener("resize", updateSlidesPerView);
	window.addEventListener("orientationchange", updateSlidesPerView);
	window.addEventListener("load", updateSlidesPerView);
	updateSlidesPerView();
}

export default creativeSpace;
