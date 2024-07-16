function areasWork(container) {
	const showButton = document.getElementById("show");
	const hideButton = document.getElementById("hide");
	const seeMoreContent = document.querySelectorAll(container);
	const hideContainer = document.querySelectorAll(".areas-work__hide-768px");
	const windowWidth = window.innerWidth;
	let scrollPosition = 0;

	showButton.addEventListener("click", () => {
		scrollPosition = window.scrollY;
		seeMoreContent.forEach((content) => {
			content.classList.remove("animate__fadeOutRight");
			content.classList.add("animate__fadeInRight");
			content.style.display = "block";
		});
		showButton.style.display = "none";
		if (hideButton) hideButton.style.display = "block";
		if (windowWidth < 768) {
			hideContainer.forEach((e) => {
				e.style.display = "block";
				e.classList.remove("animate__fadeOutRight");
				e.classList.add("animate__fadeInRight");
			});
		}
	});

	hideButton.addEventListener("click", () => {
		seeMoreContent.forEach((content) => {
			content.classList.remove("animate__fadeInRight");
			content.classList.add("animate__fadeOutRight");
			setTimeout(() => {
				window.scrollTo(0, scrollPosition);
				content.style.display = "none";
			}, 700);
		});
		showButton.style.display = "block";
		hideButton.style.display = "none";
		if (windowWidth < 768) {
			hideContainer.forEach((e) => {
				setTimeout(() => {
					e.style.display = "none";
				}, 700);
				e.classList.remove("animate__fadeInRight");
				e.classList.add("animate__fadeOutRight");
			});
		}
	});
}

export default areasWork;

// document.addEventListener('DOMContentLoaded', () => {
// 	areasWork('.see-more');
// });
