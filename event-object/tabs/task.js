//let clickPage = document.querySelector(".tab__navigation");
let tabs = [...document.querySelectorAll(".tab")];
let info = [...document.querySelectorAll(".tab__content")];



tabs.forEach((tabsc, index1) => {
	tabsc.addEventListener('click', (e) => {
		tabs.forEach((item) => item.classList.remove("tab_active"));
		info.forEach((item) => item.classList.remove("tab__content_active"));
		e.target.classList.toggle("tab_active");
		info[index1].classList.toggle("tab__content_active");
	})});