const navbar = document.querySelector(".navbar");
const links = document.querySelector(".link");

links.forEach(function (link) {
	link.addEventListener("click", function () {
		let activeClass = navbar.querySelector(".active");
		activeClass.classList.remove("active");
		link.classList.add("active");
	});
});
