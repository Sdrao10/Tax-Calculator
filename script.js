function gross_income() {
	let gross = document.getElementById("gross").value;
	const gross_in = parseInt(gross);
	let popup = document.getElementById("warn-annual");
	if(gross==""){
		document.getElementsByClassName("tooltext")[0].innerHTML="Input field is mandatory";
		
		popup.classList.add("wrong-value");
		return;
	}

	else if (isNaN(gross_in)) {
		document.getElementsByClassName("tooltext")[0].innerHTML="Please enter numbers only";
		
		popup.classList.add("wrong-value");
		return;
	} else {
		popup.classList.remove("wrong-value");
		return gross_in;
	}
}

function extra_income() {
	const extra = document.getElementById("extra").value;
	const extra_in = parseInt(extra);
	let popup = document.getElementById("warn-extra");
	if(extra==""){
		document.getElementsByClassName("tooltext")[1].innerHTML="Input field is mandatory";
		
		popup.classList.add("wrong-value");
		return;
	}
	
	else if (isNaN(extra_in)) {
		document.getElementsByClassName("tooltext")[1].innerHTML="Please enter numbers only";
		
		popup.classList.add("wrong-value");
		return calculator;
	} else {
		popup.classList.remove("wrong-value");
		return extra_in;
	}
}

function percentage_by_age_group() {
	var per = document.getElementById("ages").value;
	let popup = document.getElementById("warn-age");
	const percentage = parseInt(per);
	if (isNaN(percentage)) {
		
		popup.classList.add("wrong-value");
		return;
	} else {
		popup.classList.remove("wrong-value");
		return percentage / 100;
	}
}

function total_deduction() {
	const dedctn = document.getElementById("deduction").value;
	const deduction = parseInt(dedctn);
	let popup = document.getElementById("warn-deduction");
	if(dedctn==""){
		document.getElementsByClassName("tooltext")[3].innerHTML="Input field is mandatory";
		
		popup.classList.add("wrong-value");
	}
	else if (isNaN(deduction)) {
		document.getElementsByClassName("tooltext")[3].innerHTML="Please enter numbers only";
		
		popup.classList.add("wrong-value");
		return;
	} else {
		popup.classList.remove("wrong-value");
		return deduction;
	}
}

function openPopup() {
	let popup = document.getElementById("popup");
	popup.classList.add("open-popup");
	calc_hide();

	popup.addEventListener("click", closePopup);
}
function closePopup() {
	let popup = document.getElementById("popup");
	popup.classList.remove("open-popup");
	clear();
	warning_remove();
	calc_visible();
}

function total_income(gross_income, extra_income, percentage, deduction) {
	const total_income = gross_income + extra_income - deduction;
	if (total_income <= 800000) {
		document.getElementById("no_tax").innerHTML = "Not Taxed";
		document.getElementById("income").innerHTML = total_income;
		openPopup();
	} else if (total_income > 800000) {
		const tax = (total_income - 800000) * percentage;
		real_income = total_income - tax;
		document.getElementById("income").innerHTML = real_income;
		document.getElementById("no_tax").innerHTML = "after tax deductions";
		openPopup();
	}
}
function clear() {
	let inputs = document.querySelectorAll("input");
	let selects = document.querySelector("#ages");
	inputs.forEach((input) => (input.value = ""));
	selects.value = "";
}

function warning_remove() {
	let annual = document.getElementById("warn-annual");
	annual.classList.remove("wrong-value");

	let extra = document.getElementById("warn-extra");
	extra.classList.remove("wrong-value");

	let age = document.getElementById("warn-age");
	age.classList.remove("wrong-value");

	let deduction = document.getElementById("warn-deduction");
	deduction.classList.remove("wrong-value");
}

function calc_hide(){
	let hide = document.getElementById("calc-hide");
	hide.classList.add("hide-calc");
}
function calc_visible(){
	let visible = document.getElementById("calc-hide");
	visible.classList.remove("hide-calc");
}

function calculator() {
	const percentage = percentage_by_age_group();
	const gross_in = gross_income();
	const extra_in = extra_income();

	const deduction = total_deduction();
	if (isNaN(percentage)) {
		return;
	} else {
		total_income(gross_in, extra_in, percentage, deduction);
	}
}

document.getElementById("submit").addEventListener("click", calculator);
