const cardFirst = document.querySelector('.product-card');
const cardAll = document.querySelectorAll('.product-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#00f';
const heading = document.querySelector('.heading');
const buttonInversion = document.getElementById('button-inversion');
const buttonRecolorProduct = document.getElementById('button-recolor-product');
const buttonRecolorProductAll = document.getElementById(
  'button-recolor-product-all'
);
const buttonGoogle = document.getElementById('button-google');

buttonRecolorProduct.addEventListener('click', () => {
  cardFirst.style.backgroundColor = greenColorHash;
});
buttonInversion.addEventListener('click', () => {
  switchCssClass(buttonInversion, 'button-inversion');
});
buttonRecolorProductAll.addEventListener('click', () => {
  cardAll.forEach((card) => {
    card.style.backgroundColor = blueColorHash;
  });
});

buttonGoogle.addEventListener('click', openGoogle);
heading.addEventListener('mouseover', () => {
  console.log(heading.textContent, heading.classList.contains('headwwing'));
});
function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');
  if (answer) {
    window.open('https://google.com');
  }
}

function switchCssClass(element, nameClass) {
  if (element.classList.contains(nameClass)) {
    element.classList.remove(nameClass);
  } else {
    element.classList.add(nameClass);
  }
}
