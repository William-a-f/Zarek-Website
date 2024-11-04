// animaciones de logo, social y flechas
document.addEventListener('DOMContentLoaded', function() {
		const logo =
		document.querySelector('.home-page .logo-img');
		const menu =
		document.querySelector('.menu-container .nav');
		const footer =
		document.querySelector('.social-container .social');
		const flechas =
		document.querySelector('.scroll-down');

		if (window.location.pathname === '/music' || window.location.pathname.endsWith('/music.html')) {
			setTimeout(() => {
				flechas.classList.add('visible');
			}, 1200);
		}

	
	if (window.location.pathname === '/' || window.location.pathname === '/index' || window.location.pathname.endsWith('/index.html')) {
				setTimeout(() => {
						logo.classList.add('visible');
    		}, 100);

				setTimeout(() => {
					// menu.classList.remove('hidden');
					menu.classList.add('visible');

				}, 1200);

				setTimeout(() =>{
					// footer.classList.remove('hidden');
					footer.classList.add('visible');
				}, 2000);
			}

	if (window.matchMedia("(max-width: 768px)").matches) {
		document.querySelectorAll('.scroll-down.visible').forEach(function(element) {
			element.classList.remove('visible');
		});
		}
	
	window.addEventListener("resize", function() {
		if (this.window.matchMedia("(max-width: 768px)").matches) {
			document.querySelectorAll('.scroll-down.visible').forEach(function(element) {
				element.classList.remove('visible');
			});
		}
	});
});