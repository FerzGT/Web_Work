let clickPage = document.querySelector(".tab__navigation");
let tabs = [...document.querySelectorAll(".tab")];
let info = [...document.querySelectorAll(".tab__content")];

clickPage.addEventListener("click", function (e) {
	
	/*for (let i = 0; i < info.length; i++) {
		info[i].classList.remove("tab__content_active");
	}*/
	info.forEach((item) => item.classList.remove("tab__content_active"));

	let clickElem = e.target;
	clickElem.classList.toggle("tab_active");
	
	
	let i = tabs.indexOf(clickElem, 0);
	console.log(info);
	info[i].classList.toggle("tab__content_active");

});