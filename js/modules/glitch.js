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

	function runGlitchToEnd(el) {
		if (!hasClass(el, "is-active") && !hasClass(el, "is-used")) {
			addClass(el, "is-active");
			const firstState = el.dataset.firstimg;
			const secondState = el.dataset.secondimg;
			const thirdState = el.dataset.thirdimg;

			const mainImg = el.querySelector(".glitch__img:first-child");
			setTimeout(function () {
				mainImg.style.backgroundImage = "url(" + secondState + ")";
			}, 250);
			setTimeout(function () {
				mainImg.style.backgroundImage = "url(" + thirdState + ")";
			}, 500);
			setTimeout(function () {
				removeClass(el, "is-active");
				toggleClass(el, "is-used");
				if (hasClass(el, "has-mouseout")) {
					runGlitchToStart(el);
				}
			}, 850);
		}
	}

	function runGlitchToStart(el) {
		if (!hasClass(el, "is-active") && hasClass(el, "is-used")) {
			addClass(el, "is-active");
			const firstState = el.dataset.firstimg;
			const secondState = el.dataset.secondimg;
			const thirdState = el.dataset.thirdimg;

			const mainImg = el.querySelector(".glitch__img:first-child");
			setTimeout(function () {
				mainImg.style.backgroundImage = "url(" + secondState + ")";
			}, 250);
			setTimeout(function () {
				mainImg.style.backgroundImage = "url(" + firstState + ")";
			}, 500);
			setTimeout(function () {
				removeClass(el, "is-active");
				toggleClass(el, "is-used");
			}, 850);
		}
	}

	if (glitchList.length > 0) {
		let sleep = 500;
		glitchList.forEach(function (el) {
			setTimeout(function () {
				runGlitchToEnd(el);
			}, sleep);
			sleep += 1000;
		});

		let sleepReset = 300;
		setTimeout(function () {
			glitchList.forEach(function (el) {
				setTimeout(function () {
					runGlitchToStart(el);
				}, sleepReset);
				sleepReset += 500;
			});
		}, 3500);

		setTimeout(function () {
			glitchList.forEach(function (el) {
				el.addEventListener("mouseover", function (e) {
					addClass(el, "has-mouseover");
					removeClass(el, "has-mouseout");
					runGlitchToEnd(el);
					e.preventDefault();
				});
				el.addEventListener("mouseout", function (e) {
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
