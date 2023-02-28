const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const countBtn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const calc = function () {
	if (price.value !== 0 && people.value !== 0 && tip.value !== 0) {
		const money = (price.value + tip.value * price.value) / people.value;
		console.log(price.value);

		console.log(tip.value);
		console.log(people.value);
		console.log(money);
	}
};

countBtn.addEventListener("click", calc);
