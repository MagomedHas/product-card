const cardFirst = document.querySelector('.product-card');
const cardAll = document.querySelectorAll('.product-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#00f';
const buttonRecolorProduct = document.getElementById('button-recolor-product');
const buttonRecolorProductAll = document.getElementById(
  'button-recolor-product-all'
);
const buttonGoogle = document.getElementById('button-google');

buttonRecolorProduct.addEventListener('click', () => {
  cardFirst.style.backgroundColor = greenColorHash;
});

buttonRecolorProductAll.addEventListener('click', () => {
  cardAll.forEach((card) => {
    card.style.backgroundColor = blueColorHash;
  });
});
buttonGoogle.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer) {
    window.open('https://google.com');
  }
}
