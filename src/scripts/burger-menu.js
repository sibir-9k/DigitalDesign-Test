const burger = document.getElementById('burger');
const menu = document.querySelector('.category-menu');
const theme = document.querySelector('.theme-toggle');
const nav = document.querySelector('nav');
const liElements = nav.querySelectorAll('li');

burger.addEventListener('click', (e) => {
	e.preventDefault();
	if (menu.classList.contains('active')) {
		menu.classList.remove('active');
		theme.classList.remove('active');
	} else {
		menu.classList.add('active');
		theme.classList.add('active');
	}
});

liElements.forEach((li) => {
	li.addEventListener('click', () => {
		menu.classList.remove('active');
		theme.classList.remove('active');
	});
});
