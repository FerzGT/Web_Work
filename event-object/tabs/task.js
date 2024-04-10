let clickPage = document.querySelector(".tab__navigation");
let tabs = document.querySelectorAll(".tab");
let arrTabs = Array.from(tabs);

let info = document.querySelectorAll(".tab__content");
let arrInfo = Array.from(info);

clickPage.addEventListener("click", function (e) {
	let clickElem = event.target;
	clickElem.classList.toggle("tab_active");

	let i = arrTabs.indexOf(clickElem, 0);
	console.log(arrInfo);
	

    arrInfo[i].classList.toggle("tab__content_active");

});