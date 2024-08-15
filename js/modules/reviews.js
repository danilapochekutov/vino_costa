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
				// Удаляем класс с первой анимацией и добавляем с другой
				content.classList.remove(
					"animate__animated",
					"animate__fadeInLeft",
					"reviews-animation-set-1",
				);
				content.classList.add(
					"animate__animated",
					"animate__fadeOutLeft",
					"reviews-animation-set-2",
				);

				Button.setAttribute("disabled", "true");
				setTimeout(() => {
					content.style.display = "none";
					Button.textContent = "View More";
					Button.removeAttribute("disabled");
					window.scrollTo(0, scrollPosition);
				}, 950);

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
				content.classList.remove(
					"animate__animated",
					"animate__fadeOutLeft",
					"reviews-animation-set-2",
				);
				content.classList.add(
					"animate__animated",
					"animate__fadeInLeft",
					"reviews-animation-set-1",
				);

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
