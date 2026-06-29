function cityTemptratureOutputInCelsius(city, temptratureInCelsius) {
  console.log(
    'Сейчас в ' +
      city +
      ' температура — ' +
      temptratureInCelsius +
      ' градусов по Цельсию'
  );
}

function checkSpeedLight(speed) {
  const speedlight = 299_792_458;
  if (speed > speedlight) {
    console.log('Сверхсветовая скорость');
  } else if (speed < speedlight) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}
