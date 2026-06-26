const firstCard = document.querySelector('.product-card');
const allCards = document.querySelectorAll('.product-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#00f';
const heading = document.querySelector('.heading');
const invertBut = document.getElementById('button-inversion');
const recolorProductBut = document.getElementById('button-recolor-product');
const recolorProductAllBut = document.getElementById(
  'button-recolor-product-all'
);
const openGoogleBut = document.getElementById('button-google');

recolorProductBut.addEventListener('click', () => {
  firstCard.style.backgroundColor = greenColorHash;
});

invertBut.addEventListener('click', () => {
  invertBut.classList.toggle('button-inversion');
});

recolorProductAllBut.addEventListener('click', () => {
  allCards.forEach((card) => {
    card.style.backgroundColor = blueColorHash;
  });
});

openGoogleBut.addEventListener('click', openGoogle);
heading.addEventListener('mouseover', () => {
  console.log(heading.textContent);
});
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer) {
    window.open('https://google.com');
  }
}
