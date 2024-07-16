function areasWork(container) {
	const showButton = document.getElementById("show");
	const hideButton = document.getElementById("hide");
	const seeMoreContent = document.querySelectorAll(container);
	const hideContainer = document.querySelectorAll(".areas-work__hide-768px");
	const windowWidth = window.innerWidth;

	function showContent() {
		showButton.addEventListener("click", () => {
			seeMoreContent.forEach((content) => {
				content.classList.remove("animate__fadeOutRight");
				content.classList.add("animate__fadeInRight");
				content.style.display = "block";
			});
			showButton.style.display = "none";
			hideButton.style.display = "block";
			if (windowWidth < 768) {
				hideContainer.forEach((e) => {
					e.style.display = "block";
				});
			}
		});
	}

	function hideContent() {
		hideButton.addEventListener("click", () => {
			seeMoreContent.forEach((content) => {
				content.classList.remove("animate__fadeInRight");
				content.classList.add("animate__fadeOutRight");
				setTimeout(() => {
					content.style.display = "none";
				}, 700);
			});
			showButton.style.display = "block";
			hideButton.style.display = "none";
			if (windowWidth < 768) {
				hideContainer.forEach((e) => {
					e.style.display = "none";
				});
			}
		});
	}

	hideContent();
	showContent();
}

export default areasWork;
