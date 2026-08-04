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

function getValueObj(obi, key) {
  return obi[key];
}

const products = ['масла', 'хлеб', 'соль', 'луг', 'вода'];

const fullLengthFilmList = [
  {
    name: 'Оппенгеймер',
    releaseYear: 2023,
    country: 'США',
    genre: 'биографическая драма',
    duration: '3:00',
    premiere: '21 июля 2023',
    KinoPoisk: 8.1,
  },
  {
    name: 'Интерстеллар',
    releaseYear: 2014,
    country: 'США',
    genre: 'научная фантастика',
    duration: '2:49',
    premiere: '6 ноября 2014',
    KinoPoisk: 8.6,
  },
  {
    name: 'Паразиты',
    releaseYear: 2019,
    country: 'Южная Корея',
    genre: 'сатирический триллер',
    duration: '2:12',
    premiere: '30 мая 2019',
    KinoPoisk: 8.0,
  },
  {
    name: 'Бегущий по лезвию 2049',
    releaseYear: 2017,
    country: 'США',
    genre: 'киберпанк',
    duration: '2:44',
    premiere: '6 октября 2017',
    KinoPoisk: 7.9,
  },
];

fullLengthFilmList.push({
  name: 'Три билборда на границе Миссури',
  releaseYear: 2017,
  country: 'США',
  genre: 'чёрная комедия',
  duration: '1:55',
  premiere: '10 ноября 2017',
  KinoPoisk: 7.8,
});

const animeList = [
  {
    name: 'Смерть ради смерти',
    releaseYear: 2006,
    country: 'Япония',
    genre: 'боевик, драма',
    duration: '0:25 (серия)',
    premiere: '4 октября 2006',
    KinoPoisk: 8.5,
  },
  {
    name: 'Врата Штейна',
    releaseYear: 2011,
    country: 'Япония',
    genre: 'научная фантастика, триллер',
    duration: '0:24 (серия)',
    premiere: '6 апреля 2011',
    KinoPoisk: 8.4,
  },
  {
    name: 'Евангелион',
    releaseYear: 1995,
    country: 'Япония',
    genre: 'психологическая драма, меха',
    duration: '0:23 (серия)',
    premiere: '4 октября 1995',
    KinoPoisk: 8.1,
  },
  {
    name: 'Унесённые призраками',
    releaseYear: 2001,
    country: 'Япония',
    genre: 'фэнтези, приключения',
    duration: '2:05',
    premiere: '20 июля 2001',
    KinoPoisk: 8.4,
  },
  {
    name: 'Тетрадь смерти',
    releaseYear: 2006,
    country: 'Япония',
    genre: 'детектив, психологический триллер',
    duration: '0:23 (серия)',
    premiere: '4 октября 2006',
    KinoPoisk: 8.3,
  },
];

const movieList = [...animeList, ...fullLengthFilmList];

function addIsRare(movies) {
  movies.map((movie) => {
    movie.isRare = movie.releaseYear > 2000;
  });
}
