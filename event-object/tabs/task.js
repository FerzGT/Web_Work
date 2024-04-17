//let clickPage = document.querySelector(".tab__navigation");
let tabs = [...document.querySelectorAll(".tab")];
let info = [...document.querySelectorAll(".tab__content")];

const removeTabs = tabs.forEach((item) => item.classList.remove("tab_active"));

tabs.forEach((tabs, index1) => {
	
	tabs.addEventListener('click', (e) => {
	
		removeTabs;
		info.forEach((item) => item.classList.remove("tab__content_active"));
		e.target.classList.toggle("tab_active");
		info[index1].classList.toggle("tab__content_active");
	})});