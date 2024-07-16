function buttons(classButton, idButton) {
	document.querySelectorAll(classButton).forEach((button) => {
		button.addEventListener("click", () => {
			const url = button.getAttribute("data-url");
			if (url) {
				button.setAttribute("disabled", "true");
				window.open(url, "_blank");
				setTimeout(() => {
					button.removeAttribute("disabled");
				}, 1000);
			}
		});
	});

	document.querySelectorAll(idButton).forEach((button) => {
		button.addEventListener("click", () => {
			const url = button.getAttribute("data-url");
			if (url) {
				button.setAttribute("disabled", "true");
				window.open(url, "_blank");
				setTimeout(() => {
					button.removeAttribute("disabled");
				}, 1000);
			}
		});
	});

	const autographButton = document.querySelector(".autograph__button");
	autographButton.addEventListener("click", () => {
		const url = autographButton.getAttribute("data-url");
		if (url) {
			autographButton.setAttribute("disabled", "true");
			window.open(url, "_blank");
			setTimeout(() => {
				autographButton.removeAttribute("disabled");
			}, 1000);
		}
	});
}

export default buttons;
