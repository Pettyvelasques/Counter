const decrease = document.getElementById("btn-dec");
const reset = document.getElementById("btn-reset");
const increase = document.getElementById("btn-inc");
const counter = document.querySelector(".counter");

decrease.addEventListener("click", function () {
	counter.textContent--;
	changeColor(counter.textContent);
	/* console.log(counter.textContent); */
});

increase.addEventListener("click", function () {
	counter.textContent++;
	changeColor(counter.textContent);
	/* console.log(counter.textContent); */
});

reset.addEventListener("click", function () {
	counter.textContent = 0;
	changeColor(counter.textContent);
	/* console.log(counter.textContent); */
});

function changeColor(a) {
	if (a > 0) {
		counter.style.color = "var(--clr-green)";
		/* console.log(counter.style.color); */
	}
	if (a < 0) {
		counter.style.color = "var(--clr-red-dark)";
		/* console.log(counter.style.color); */
	}
	if (a == 0) {
		counter.style.color = "var(--clr-black)";
		/* console.log(counter.style.color); */
	}
}
