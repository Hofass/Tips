const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const countBtn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const calc = function () {
	if (price.value !== '' && people.value !== '' && tip.value !== '') {
		const money = (Number(tip.value) * Number(price.value)+Number(price.value))/Number(people.value);
    costInfo.style.display="flex"
    costInfo.textContent=`Do zapłaty ${money} zł`
    price.value = ''
    people.value = ''
    tip.value = ''

	}else{
    error.textContent="Uzupełnij wszystkie pola"
  }
};

countBtn.addEventListener("click", calc);
