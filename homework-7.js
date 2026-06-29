function cityTemptratureOutputInCelsius(city, temptratureInCelsius) {
  console.log(
    `Сейчас в ${city} температура — ${temptratureInCelsius} градусов по Цельсию`
  );
}

function checkSpeedLight(speed) {
  const SPEED_LIGHT = 299_792_458;
  if (speed > SPEED_LIGHT) {
    console.log('Сверхсветовая скорость');
  } else if (speed < SPEED_LIGHT) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}
