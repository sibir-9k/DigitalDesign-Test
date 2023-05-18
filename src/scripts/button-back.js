const backToTopButton = document.querySelector('.back-to-top button');

backToTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

window.addEventListener('scroll', () => {
	if (window.scrollY > 350) {
		backToTopButton.style.display = 'block';
	} else {
		backToTopButton.style.display = 'none';
	}
});
