function reviews(container) {
	const Button = document.querySelector(".reviews__button");
	const viewMoreContent = document.querySelectorAll(container);
	const hideContainer = document.querySelectorAll(".reviews__item__hide-768px");
	const windowWidth = window.innerWidth;

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
				}, 700);
				if (windowWidth < 768) {
					hideContainer.forEach((e) => {
						e.style.display = "none";
					});
				}
			} else {
				content.classList.remove("animate__fadeOutLeft");
				content.classList.add("animate__fadeInLeft");
				content.style.display = "block";
				Button.textContent = "Hide Reviews";
				if (windowWidth < 768) {
					hideContainer.forEach((e) => {
						e.style.display = "block";
					});
				}
			}
		});
		isContentVisible = !isContentVisible;
	});
}

export default reviews;
