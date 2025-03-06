
var btnOpen = document.getElementById("open_form");
var btnOpenMenu = document.getElementById("mobile_menu");
var btnClose = document.getElementById("close_form");
var myModalForm = document.getElementById("modal_form");
var myModalMenu = document.getElementById("modal_menu");

function toggleClass() {
	myModalMenu.classList.toggle("is-open");
	myModalForm.classList.toggle("is-open");
}

btnOpen.addEventListener("click", toggleClass);
btnOpenMenu.addEventListener("click", toggleClass);
btnClose.addEventListener("click", toggleClass);