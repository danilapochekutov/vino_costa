function reviews(container) {
	const Button = document.querySelector(".reviews__button");
	const viewMoreContent = document.querySelectorAll(container);
	const hideContainer = document.querySelectorAll(".reviews__item__hide-768px");
	const windowWidth = window.innerWidth;
	let scrollPosition = 0;
	let isContentVisible = false;

	Button.addEventListener("click", () => {
		viewMoreContent.forEach((content) => {
			if (isContentVisible) {
				content.classList.remove("animate__fadeInLeft");
				content.classList.add("animate__fadeOutLeft");
				Button.setAttribute("disabled", "true");
				setTimeout(() => {
					content.style.display = "none";
					Button.textContent = "View More";
					Button.removeAttribute("disabled");
					window.scrollTo(0, scrollPosition);
				}, 700);
				if (windowWidth < 768) {
					hideContainer.forEach((e) => {
						setTimeout(() => {
							e.style.display = "none";
						}, 700);
						e.classList.remove("animate__fadeInLeft");
						e.classList.add("animate__fadeOutLeft");
					});
				}
			} else {
				scrollPosition = window.scrollY;
				content.classList.remove("animate__fadeOutLeft");
				content.classList.add("animate__fadeInLeft");
				content.style.display = "block";
				Button.textContent = "Hide Reviews";
				if (windowWidth < 768) {
					hideContainer.forEach((e) => {
						e.style.display = "block";
						e.classList.remove("animate__fadeOutLeft");
						e.classList.add("animate__fadeInLeft");
					});
				}
			}
		});
		isContentVisible = !isContentVisible;
	});
}

export default reviews;
