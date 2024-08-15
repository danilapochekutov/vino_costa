function guarantee(container) {
	const Button = document.querySelector(".guarantee__button");
	const hideContainer = document.querySelectorAll(container);
	let scrollPosition = 0;
	let isContentVisible = false;

	Button.addEventListener("click", () => {
		hideContainer.forEach((content) => {
			if (isContentVisible) {
				content.classList.remove("animate__fadeInUp");
				content.classList.add("animate__fadeOutUp");
				Button.setAttribute("disabled", "true");
				setTimeout(() => {
					window.scrollTo(0, scrollPosition);
					content.style.display = "none";
					Button.textContent = "More Features";
					Button.removeAttribute("disabled");
				}, 700);
			} else {
				scrollPosition = window.scrollY;
				content.style.display = "block";
				content.classList.remove("animate__fadeOutUp");
				content.classList.add("animate__animated", "animate__fadeInUp");
				Button.textContent = "Hide Features";
			}
		});
		isContentVisible = !isContentVisible;
	});
}

export default guarantee;
