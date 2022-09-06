// globals
const submitBtn = document.querySelector(".submit");
const selectedRating = document.querySelector("#selected-rating");
const ratingScale = Array.from(
	document.querySelector(".rating-scale").children
);
const ratingPromptCard = document.querySelector(".rating-prompt");
const ratingResponseCard = document.querySelector(".rating-response");
const error = document.querySelector(".error");

// console.log(ratingScale);
// debugger;

// reset state
function reset() {
	ratingScale.forEach((rating) => {
		rating.classList.remove("selected");
	});
	error.textContent = "";
}

// handle rating selection
ratingScale.forEach((rating) => {
	rating.addEventListener("click", function (e) {
		reset(); // reset state

		// add selected
		const id = +this.id;
		for (let i = 0; i < id; i++) {
			ratingScale[i].classList.add("selected");
		}
	});
});

// handle submit
submitBtn.addEventListener("click", () => {
	const ratingScaleSelected = document.querySelectorAll(".selected")?.length;

	if (!ratingScaleSelected) {
		error.textContent = "Select a rating";
		return;
	}
	selectedRating.textContent = ratingScaleSelected;

	ratingResponseCard.classList.remove("displayNone");
	ratingPromptCard.classList.add("displayNone");
});
