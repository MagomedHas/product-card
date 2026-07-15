import { ointments } from './ointments.js';
const RUBLE_SIGN = '\u{20BD}';
const templateProductCard = document.getElementById('template_product-card');
const productList = document.getElementById('product-list');
const productsTitleAndText = ointments.reduce((acc, product) => {
  const item = { [product.title]: product.text };
  acc.push(item);
  return acc;
}, []);

function setProductCardList(productCardList) {
  for (const productCard of productCardList) {
    const productCardClone = templateProductCard.content.cloneNode(true);
    productCardClone
      .querySelector('img')
      .setAttribute('src', `img/${productCard.img}.png`);
    productCardClone
      .querySelector('img')
      .setAttribute('alt', productCard.title);
    productCardClone.querySelector('.product-card__title').textContent =
      productCard.title;
    productCardClone.querySelector('.product-card__product-for').textContent =
      productCard.for;
    productCardClone.querySelector('.product-card__text').textContent =
      productCard.text;

    const compoundList = productCardClone.querySelector(
      '.product-card__compound-list'
    );
    for (const item of productCard.compounds) {
      const compound = document.createElement('li');
      compound.textContent = item;
      compoundList.appendChild(compound);
    }
    productCardClone.querySelector(
      '.product-card__price'
    ).textContent = `${productCard.price} ${RUBLE_SIGN}`;
    productList.appendChild(productCardClone);
  }
}

function requestQuantityProduct() {
  while (true) {
    let input = prompt('Сколько карточек отобразить? От 1 до 5', '5');
    if (input === null) {
      return 0;
    }

    const quantity = Number(input);

    if (Number.isInteger(quantity) && quantity >= 1 && quantity <= 5) {
      return quantity;
    }
    alert('Пожалуйста, введите целое число от 1 до 5.');
  }
}

const quantity = requestQuantityProduct();

ointments.length = quantity;
setProductCardList(ointments);
