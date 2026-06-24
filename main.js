const cardFirst = document.querySelector('.product-card');
const cardAll = document.querySelectorAll('.product-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#00f';
const buttonRecolorProduct = document.getElementById('button-recolor-product');
const buttonRecolorProductAll = document.getElementById(
  'button-recolor-product-all'
);

buttonRecolorProduct.addEventListener('click', () => {
  cardFirst.style.backgroundColor = greenColorHash;
});

buttonRecolorProductAll.addEventListener('click', () => {
  cardAll.forEach((card) => {
    card.style.backgroundColor = blueColorHash;
  });
});
console.log('!!!', buttonRecolorProduct);
