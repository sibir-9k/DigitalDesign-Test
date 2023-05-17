const buyBtn = document.querySelectorAll('.buy-button');
const form = document.getElementById('form');
const modal = document.querySelector('.modal');
const closeBtnModal = document.querySelector('.close');
const buyBtnModal = document.querySelector('.buy');

buyBtn.forEach((button) => {
	button.addEventListener('click', function () {
		modal.classList.add('open');
	});
});

closeBtnModal.addEventListener('click', function (event) {
	event.preventDefault();
	modal.classList.remove('open');
});

function retrieveFormValue(event) {
	event.preventDefault();

	let countProduct = document.getElementById('number'),
		colorInput = document.querySelector('input[name="color"]:checked'),
		comment = document.getElementById('comment');

	const valueForm = {
		count: countProduct.value,
		color: colorInput.value,
		colorHex: colorInput.nextElementSibling.value,
		comment: comment.value,
	};

	alert(
		`Вы купили товар с номером цвета ${valueForm.color} ( сам цвет: ${valueForm.colorHex} ) 
    c кол-ом ${valueForm.count}  и комментарием ' ${valueForm.comment} ' `
	);

	modal.classList.remove('open');
	document.getElementById('form').reset();
}

form.addEventListener('submit', retrieveFormValue);