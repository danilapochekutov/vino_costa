function moveIt(Container) {
	const compSliders = document.querySelectorAll(Container);

	if (compSliders.length > 0) {
		compSliders.forEach((slider) => {
			initializeSlider(slider);
		});

		window.addEventListener("resize", () => {
			compSliders.forEach((slider) => {
				updateSliderWidth(slider);
			});
		});
	}

	function initializeSlider(slider) {
		const resizeElement = slider.querySelector(".slider__resize");
		const divider = slider.querySelector(".slider__divider");

		updateSliderWidth(slider);

		let isDragging = false;

		divider.addEventListener("mousedown", startDrag);
		divider.addEventListener("touchstart", startDrag);

		document.addEventListener("mousemove", drag);
		document.addEventListener("touchmove", drag);

		document.addEventListener("mouseup", stopDrag);
		document.addEventListener("touchend", stopDrag);

		function startDrag(e) {
			isDragging = true;
			resizeElement.classList.add("resizable");
			divider.classList.add("draggable");
		}

		function drag(e) {
			if (!isDragging) return;

			let pageX;
			if (e.pageX !== undefined) {
				pageX = e.pageX;
			} else if (e.touches && e.touches.length > 0) {
				pageX = e.touches[0].pageX;
			} else {
				return; // Если ни один из вариантов не доступен, прерываем функцию
			}
			const windowWidth = window.innerWidth;
			let margilRight = 22;

			if (windowWidth < 768) {
				margilRight = 17;
			} else {
				margilRight = 22;
			}

			let containerRect = slider.getBoundingClientRect();
			let xPos = Math.max(
				0,
				Math.min(pageX - containerRect.left, containerRect.width - margilRight),
			);

			let widthPercent = (xPos / containerRect.width) * 100;
			resizeElement.style.width = widthPercent + "%";
			divider.style.left = widthPercent + "%";
		}

		function stopDrag() {
			isDragging = false;
			resizeElement.classList.remove("resizable");
			divider.classList.remove("draggable");
		}
	}

	function updateSliderWidth(slider) {
		const resizeElement = slider.querySelector(".slider__resize");
		const compSliderWidth = slider.offsetWidth + "px";
		const img = resizeElement.querySelector("img");
		img.style.width = compSliderWidth;
	}
}

export default moveIt;
