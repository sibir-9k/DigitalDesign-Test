// Back to top button
const backToTopButton = document.querySelector('.back-to-top button');

backToTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

// Active navigation link
const navLinks = Array.from(document.querySelectorAll('.category-menu a'));

navLinks.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const id = e.target.getAttribute('href');
		const section = document.querySelector(id);
		const topOffset = section.offsetTop - 100; // account for sticky header
		window.scrollTo({
			top: topOffset,
			behavior: 'smooth',
		});
		navLinks.forEach((link) => link.classList.remove('active'));
		e.target.classList.add('active');
	});
});

// Show back to top button when scrolling
window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		backToTopButton.style.display = 'block';
	} else {
		backToTopButton.style.display = 'none';
	}
});
