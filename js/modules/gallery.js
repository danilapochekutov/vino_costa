function gallery(gallerySelector) {
	const gallery = document.querySelector(gallerySelector);
	if (!gallery) {
		console.error(`Element with selector "${gallerySelector}" not found.`);
		return;
	}

	let isDown = false;
	let startX;
	let scrollLeft;

	const centerGallery = () => {
		gallery.scrollLeft = (gallery.scrollWidth - gallery.clientWidth) / 2 - 40;
	};

	window.addEventListener("load", centerGallery);

	const onMouseDown = (e) => {
		if (e.target.tagName === "IMG") {
			e.preventDefault();
		}
		isDown = true;
		gallery.classList.add("active");
		startX = e.pageX - gallery.offsetLeft;
		scrollLeft = gallery.scrollLeft;
	};

	const onMouseUpOrLeave = () => {
		isDown = false;
		gallery.classList.remove("active");
	};

	const onMouseMove = (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - gallery.offsetLeft;
		const walk = x - startX;
		gallery.scrollLeft = scrollLeft - walk;
	};

	gallery.addEventListener("mousedown", onMouseDown);
	gallery.addEventListener("mouseup", onMouseUpOrLeave);
	gallery.addEventListener("mouseleave", onMouseUpOrLeave);
	gallery.addEventListener("mousemove", onMouseMove);
}

export default gallery;
