const client = {
  firstName: 'Али',
  lastName: 'Хабибов',
  gender: 'М',
  age: 43,
  country: 'Россия',
  city: 'Сочи',
  email: 'alix43@mail.ru',
  job: 'Строитель',
  position: 'Прораб',
  relationshipStatus: 'Женат',
};

const car = {
  make: 'Toyota',
  model: 'Camry',
  yearOfManufacture: 2020,
  color: 'серебристый',
  typeOfTransmission: 'автоматическая',
};

car.owner = client;

function addMaxSpeed(objCar) {
  if (!objCar.maxSpeed) {
    objCar.maxSpeed = 250;
  }
}
