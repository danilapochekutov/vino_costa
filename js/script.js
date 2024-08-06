"use strict";

import glitch from "./modules/glitch.js";
import headerNav from "./modules/header.js";
import counter from "./modules/counter.js";
// import gallery from "./modules/gallery.js";
// import followers from "./modules/followers.js";
import creativeSpace from "./modules/creative-space.js";
import showreel from "./modules/showreel.js";
import slider from "./modules/slider.js";
import buttons from "./modules/buttons.js";
import sliderIframe from "./modules/sliderIframe.js";
import emojiSlider from "./modules/offer.js";
import areasWork from "./modules/areas-work.js";
import reviews from "./modules/reviews.js";
import guarantee from "./modules/guarantee.js";
import animation from "./modules/wow.js";

document.addEventListener("DOMContentLoaded", () => {
	glitch();
	headerNav();
	animation();
	counter(".user-trust__count");
	// gallery(".gallery");
	// followers(".followers", ".card");
	creativeSpace(".creative-space__container");
	showreel(".showreel__container");
	slider(".move-it.slider");
	slider(".nfts.slider", { changeColor: true });
	buttons(".download-excel", ".roobinium");
	sliderIframe(".crypto-pioneer__container", ".backstages__container");
	emojiSlider();
	areasWork(".see-more");
	reviews(".reviews__view-more");
	guarantee(".guarantee__item__hide-768px");
});
