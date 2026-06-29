function logCityTempC(city, tempC) {
  console.log(`Сейчас в ${city} температура — ${tempC} градусов по Цельсию`);
}

function logCheckSpeedToLight(speed) {
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
const productPrice = 299_792_458; // ;)

function logProductPurchase(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const shortage = productPrice - budget;
    console.log(`Вам не хватает ${shortage}$, пополните баланс`);
  }
}
