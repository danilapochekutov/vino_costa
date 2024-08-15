function areasWork(container) {
	const showButton = document.getElementById("show");
	const hideButton = document.getElementById("hide");
	const seeMoreContent = document.querySelectorAll(container);
	const hideContainer = document.querySelectorAll(".areas-work__hide-768px");
	const windowWidth = window.innerWidth;
	let scrollPosition = 0;

	showButton.addEventListener("click", () => {
		scrollPosition = window.scrollY;
		seeMoreContent.forEach((e) => {
			const buttonContent = e.querySelectorAll(".areas-work__item");
			buttonContent.forEach((content) => {
				content.classList.remove("animate__fadeOutUp");
				content.classList.add("animate__fadeInUp");
				content.style.display = "block";
			});
		});
		showButton.style.display = "none";
		if (hideButton) hideButton.style.display = "block";
		if (windowWidth < 768) {
			hideContainer.forEach((e) => {
				e.style.display = "block";
				e.classList.remove("animate__fadeOutUp");
				e.classList.add("animate__fadeInUp");
			});
		}
	});

	hideButton.addEventListener("click", () => {
		seeMoreContent.forEach((e) => {
			const buttonContent = e.querySelectorAll(".areas-work__item");
			buttonContent.forEach((content) => {
				content.classList.remove("animate__fadeInUp");
				content.classList.add("animate__fadeOutUp");
				setTimeout(() => {
					window.scrollTo(0, scrollPosition);
					content.style.display = "none";
				}, 1500);
			});
		});
		showButton.style.display = "block";
		hideButton.style.display = "none";
		if (windowWidth < 768) {
			hideContainer.forEach((e) => {
				setTimeout(() => {
					e.style.display = "none";
				}, 700);
				e.classList.remove("animate__fadeInUp");
				e.classList.add("animate__fadeOutUp");
			});
		}
	});
}

export default areasWork;
