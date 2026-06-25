const firstCard = document.querySelector('.product-card');
const allCards = document.querySelectorAll('.product-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#00f';
const heading = document.querySelector('.heading');
const invertButton = document.getElementById('button-inversion');
const buttonRecolorProduct = document.getElementById('button-recolor-product');
const buttonRecolorProductAll = document.getElementById(
  'button-recolor-product-all'
);
const openGoogleBtn = document.getElementById('button-google');

buttonRecolorProduct.addEventListener('click', () => {
  firstCard.style.backgroundColor = greenColorHash;
});

invertButton.addEventListener('click', () => {
  invertButton.classList.toggle('button-inversion');
});

buttonRecolorProductAll.addEventListener('click', () => {
  allCards.forEach((card) => {
    card.style.backgroundColor = blueColorHash;
  });
});

openGoogleBtn.addEventListener('click', openGoogle);
heading.addEventListener('mouseover', () => {
  console.log(heading.textContent);
});
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer) {
    window.open('https://google.com');
  }
}
