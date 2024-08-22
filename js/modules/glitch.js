function glitch() {
	const glitchList = document.querySelectorAll(".glitch");

	function addClass(el, className) {
		if (!el.classList.contains(className)) {
			el.classList.add(className);
		}
	}

	function removeClass(el, className) {
		if (el.classList.contains(className)) {
			el.classList.remove(className);
		}
	}

	function hasClass(el, className) {
		return el.classList.contains(className);
	}

	function toggleClass(el, className) {
		el.classList.toggle(className);
	}

	function runGlitch(el, startImg, secondImg, thirdImg, callback) {
		const mainImg = el.querySelector(".glitch__img:first-child");

		setTimeout(() => {
			mainImg.style.backgroundImage = `url(${secondImg})`;
		}, 250);

		setTimeout(() => {
			mainImg.style.backgroundImage = `url(${thirdImg})`;
		}, 500);

		setTimeout(() => {
			callback();
		}, 850);
	}

	function runGlitchToEnd(el) {
		if (!hasClass(el, "is-active") && !hasClass(el, "is-used")) {
			addClass(el, "is-active");
			const firstState = el.dataset.firstimg;
			const secondState = el.dataset.secondimg;
			const thirdState = el.dataset.thirdimg;

			runGlitch(el, firstState, secondState, thirdState, () => {
				removeClass(el, "is-active");
				toggleClass(el, "is-used");
				if (hasClass(el, "has-mouseout")) {
					runGlitchToStart(el);
				}
			});
		}
	}

	function runGlitchToStart(el) {
		if (!hasClass(el, "is-active") && hasClass(el, "is-used")) {
			addClass(el, "is-active");
			const firstState = el.dataset.firstimg;
			const secondState = el.dataset.secondimg;

			runGlitch(el, secondState, firstState, firstState, () => {
				removeClass(el, "is-active");
				toggleClass(el, "is-used");
			});
		}
	}

	if (glitchList.length > 0) {
		let sleep = 2000;
		glitchList.forEach((el) => {
			setTimeout(() => runGlitchToEnd(el), sleep);
			sleep += 1000;
		});

		let sleepReset = 300;

		setTimeout(() => {
			glitchList.forEach((el) => {
				setTimeout(() => runGlitchToStart(el), sleepReset);
				sleepReset += 500;
			});
		}, 3500);

		setTimeout(() => {
			glitchList.forEach((el) => {
				el.addEventListener("mouseover", (e) => {
					addClass(el, "has-mouseover");
					removeClass(el, "has-mouseout");
					runGlitchToEnd(el);
					e.preventDefault();
				});
				el.addEventListener("mouseout", (e) => {
					addClass(el, "has-mouseout");
					removeClass(el, "has-mouseover");
					runGlitchToStart(el);
					e.preventDefault();
				});
			});
		}, 4000);
	}
}

export default glitch;
