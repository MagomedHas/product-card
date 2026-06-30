function showWeather(city, tempC) {
  console.log(`Сейчас в ${city} температура — ${tempC} градусов по Цельсию`);
}

function compareSpeed(speed) {
  const SPEED_OF_LIGHT = 299_792_458;
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

const productName = 'Mars';
const productPrice = 299;

function purchaseProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const shortage = productPrice - budget;
    console.log(`Вам не хватает ${shortage}$, пополните баланс`);
  }
}

function addRatings(user, grade, message) {}
