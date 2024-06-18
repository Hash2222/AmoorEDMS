document.addEventListener("DOMContentLoaded", function (){
	document.documentElement.style.setProperty("--scrollbar-width", `${window.innerWidth - document.documentElement.clientWidth}px`);
	console.log(document.documentElement.style.getPropertyValue("--scrollbar-width"))
})