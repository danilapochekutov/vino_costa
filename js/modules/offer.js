function emojiSlider() {
	const sliderInput = document.getElementById("sliderInput");
	const rightValue = document.getElementById("rightValue");
	const emojiImage = document.getElementById("emojiImage");

	sliderInput.addEventListener("input", () => {
		const sliderValue = parseInt(sliderInput.value);

		if (sliderValue >= 1000 && sliderValue < 2000) {
			emojiImage.src = "./icons/offer/1-2.svg";
		} else if (sliderValue >= 2000 && sliderValue < 5000) {
			emojiImage.src = "./icons/offer/2-5.svg";
		} else if (sliderValue >= 5000 && sliderValue < 7000) {
			emojiImage.src = "./icons/offer/5-7.svg";
		} else if (sliderValue >= 7000 && sliderValue <= 10000) {
			emojiImage.src = "./icons/offer/7-10.svg";
		}

		rightValue.textContent = sliderValue.toLocaleString("en-US");
	});
}

export default emojiSlider;
