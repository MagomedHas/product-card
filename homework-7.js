function logCityTempC(city, tempC) {
  console.log(`Сейчас в ${city} температура — ${tempC} градусов по Цельсию`);
}

function checkSpeedToLight(speed) {
  const SPEED_OF_LIGHT = 299_792_458;
  if (speed > SPEED_OF_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_OF_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}
