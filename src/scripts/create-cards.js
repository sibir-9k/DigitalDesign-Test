import { dataPastCollection } from '../data/data';
import { dataNewCollection } from '../data/data';
import { dataFutureCollection } from '../data/data';

const pastCollection = document.querySelector('.past');
const newCollection = document.querySelector('.new');
const futureCollection = document.querySelector('.future');

function getDayInfo(dateStr) {
  const weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  
  const dateParts = dateStr.split(".");
  const dateObj = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
  
  const weekday = weekdays[dateObj.getDay()];
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const weekNum = Math.ceil((dateObj.getDate() + 6 - dateObj.getDay()) / 7); 
  
  const result = `${weekday}, ${weekNum} неделя ${month} ${year} года`
  return result;
}

const createCardProduct = (parentTag, data) => {
	data.forEach((card) => {
		const cardBlock = document.createElement('div');
		cardBlock.classList.add('product-grid');

		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
		cardBlock.appendChild(productCard);

		const img = document.createElement('img');
		(img.src = card.imgSrc), (img.alt = card.name);
		productCard.appendChild(img);

		const h3 = document.createElement('h3');
		h3.textContent = card.name;
		productCard.appendChild(h3);

		const p = document.createElement('p');
		p.textContent = `${getDayInfo(card.data)}`;
		p.classList.add('date-added');
		productCard.appendChild(p);

		const buy = document.createElement('button');
		buy.classList.add('buy-button');
		buy.textContent = 'Buy';
		productCard.appendChild(buy);

		parentTag.appendChild(cardBlock);
	});
};

createCardProduct(pastCollection, dataPastCollection);
createCardProduct(newCollection, dataNewCollection);
createCardProduct(futureCollection, dataFutureCollection);
