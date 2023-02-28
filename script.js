const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const countBtn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const calc = function () {
	if (price.value == '' || people.value == '' || tip.value === 0) {
    error.textContent="Uzupełnij wszystkie pola"
    costInfo.textContent=''

		

	}else{
    const money = (Number(tip.value) * Number(price.value)+Number(price.value))/Number(people.value);
    costInfo.style.display="flex"
    costInfo.textContent=`Do zapłaty ${money.toFixed(2)} zł`
    error.textContent=""

    price.value = ''
    people.value = ''
    tip.value = ''
  }
};

countBtn.addEventListener("click", calc);
