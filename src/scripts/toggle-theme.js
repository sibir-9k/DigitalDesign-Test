const themeToggle = document.querySelector('.theme-toggle');
const body = document.querySelector('body');

const savedTheme = sessionStorage.getItem('theme');
if (savedTheme === 'dark') {
	body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
	body.classList.toggle('dark-theme');
	if (body.classList.contains('dark-theme')) {
		sessionStorage.setItem('theme', 'dark');
	} else {
		sessionStorage.removeItem('theme');
	}
});
