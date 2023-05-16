import { dataPastCollection } from '../data/data';
import { dataNewCollection } from '../data/data';
import { dataFutureCollection } from '../data/data';

const pastCollection = document.querySelector('.past');
const newCollection = document.querySelector('.new');
const futureCollaction = document.querySelector('.future');

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
		p.textContent = 'Added on Jan 1, 2022';
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
createCardProduct(futureCollaction, dataFutureCollection);
