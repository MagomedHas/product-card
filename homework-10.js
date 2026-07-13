import { products } from './products.js';

const templateProductCard = document.getElementById('template_product-card');
const productList = document.getElementById('product-list');

function setProductCard(productCard) {
  const productCardClont = templateProductCard.content.cloneNode(true);
  productCardClont.querySelector('img').setAttribute('src', productCard.img);
  productCardClont.querySelector('img').setAttribute('alt', productCard.title);
  productCardClont.querySelector('.product-card__title').textContent = productCard.title;
  productCardClont.querySelector('.product-card__for').textContent = productCard.for;
  productCardClont.querySelector('.product-card__text').textContent = productCard.text;
  for (const compound of productCard.compounds){

    const li=document.createElement('li')
    li.textContent = compound
    console.log(li)
    productCardClont.querySelector('.product-card__list')
        .appendChild(li)
  }

  productList.appendChild(productCardClont);

}

setProductCard(products[0]);
