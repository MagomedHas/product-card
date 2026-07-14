import { products } from './products.js';
const RUBLE_SIGN = '\u{20BD}';
const templateProductCard = document.getElementById('template_product-card');
const productList = document.getElementById('product-list');
const productsTitleAndText = products.reduce((acc, product) => {
  const item = { [product.title]: product.text };
  acc.push(item);
  return acc;
}, []);
function setProductCard(productCard) {
  const productCardClont = templateProductCard.content.cloneNode(true);
  productCardClont.querySelector('img').setAttribute('src', productCard.img);
  productCardClont.querySelector('img').setAttribute('alt', productCard.title);
  productCardClont.querySelector('.product-card__title').textContent =
    productCard.title;
  productCardClont.querySelector('.product-card__for').textContent =
    productCard.for;
  productCardClont.querySelector('.product-card__text').textContent =
    productCard.text;

  const compoundList = productCardClont.querySelector(
    '.product-card__compound-list'
  );
  for (const item of productCard.compounds) {
    const compound = document.createElement('li');
    compound.textContent = item;
    compoundList.appendChild(compound);
  }
  productCardClont.querySelector(
    '.product-card__price'
  ).textContent = `${productCard.price} ${RUBLE_SIGN}`;
  productList.appendChild(productCardClont);
}


function setProductCardList(productCardList) {
  for (const product of productCardList) {
    setProductCard(product);
  }
}

function requestQuantityProduct() {
  while (true){
    let input = prompt('Сколько карточек отобразить? От 1 до 5', '5');
    if (input === null) {
      return 0
    }

    const quantity = Number(input);

    if (Number.isInteger(quantity) && quantity >= 1 && quantity <= 5) {
      return quantity;
    }
    alert('Пожалуйста, введите целое число от 1 до 5.');
  }
}

const quantity = requestQuantityProduct()

products.length = quantity;
setProductCardList(products);