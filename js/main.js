window.addEventListener('load', function() {
	var preloader = document.getElementById('onload');
	var content = document.getElementById('main-content');

	preloader.style.display = 'none';
	content.style.display = 'block';

	document .body.classList.remove('no-scroll');
});

// navToggle- mostrar
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("nav-menu_visible");

	if (navMenu.classList.contains("nav-menu_visible")) {
		navToggle.setAttribute("aria-label", "Close menu");
	} else {
		navToggle.setAttribute("aria-label", "Open menu");
	}
});

// direccionamiento a paginas navToggle
const menuLinks =document.querySelectorAll('.nav-menu a[href^="/"]');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		const id = entry.target.getAttribute("section");
		const menuLink = document.querySelector(`.nav-menu a[href="/${id}"]`)

		if (entry.isIntersecting) {
			document.querySelector(".nav-menu a.selected").classList.remove("selected");
			menuLink.classList.add("selected");
		}
	});
}, {rootMargin: "0px"});

menuLinks.forEach(menuLink => {
	menuLink.addEventListener("click", function() {
		navMenu.classList.remove("nav-menu_visible");
	})

	const hash =menuLink.getAttribute("href");
	const target = document.querySelector(hash);
	if (target) {
		observer.observe(target);
	}
});