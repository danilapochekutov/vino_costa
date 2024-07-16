function gallery(gallerySelector) {
	const gallery = document.querySelector(gallerySelector);
	if (!gallery) {
		console.error(`Element with selector "${gallerySelector}" not found.`);
		return;
	}

	let isDown = false;
	let startX;
	let scrollLeft;

	// Центрирование галереи при загрузке
	const centerGallery = () => {
		gallery.scrollLeft = (gallery.scrollWidth - gallery.clientWidth) / 2 - 40;
	};

	window.addEventListener("load", centerGallery);

	gallery.querySelectorAll("img").forEach((img) => {
		img.addEventListener("mousedown", (e) => {
			e.preventDefault();
		});
	});

	gallery.addEventListener("mousedown", (e) => {
		isDown = true;
		gallery.classList.add("active");
		startX = e.pageX - gallery.offsetLeft;
		scrollLeft = gallery.scrollLeft;
	});

	gallery.addEventListener("mouseup", () => {
		isDown = false;
		gallery.classList.remove("active");
	});

	gallery.addEventListener("mouseleave", () => {
		isDown = false;
		gallery.classList.remove("active");
	});

	gallery.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - gallery.offsetLeft;
		const walk = x - startX;
		gallery.scrollLeft = scrollLeft - walk;
	});
}

export default gallery;
