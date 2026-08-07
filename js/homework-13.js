const ROOM_TEMP = 33;
const FRIDGE_TEMP = 2;
const BOILING_TEMP = 100;

class Drink {
  #temperature = ROOM_TEMP;

  constructor(name, size, price) {
    if (new.target === Drink) {
      throw new Error('Нельзя создавать экземпляр абстрактного класса Drink');
    }
    this.name = name;
    this.size = size;
    this.price = price;
  }

  getInfo(addInfos){
    return { name: this.name, size: this.size, price: this.price, temperature: this.#temperature , ...addInfos};
  }

  getTemperature(){
    return this.#temperature;
  }

  setTemperature(temperature){
    this.#temperature = temperature;
  }

  _prepare() {}

  serve() {
    console.log(`готовется ${this.name}`)
    this._prepare()
    console.log(`Подать ${this.name}`)
  }
}

class Lemonar extends Drink {

  constructor(name, size, price, brand, variety, cold) {
    super(name, size, price);
    this.brand = brand;
    this.variety = variety;
    this.cold = cold;
  }

  getInfo() {
    return super.getInfo({brand: this.brand, variety: this.variety});
  }

  _prepare() {
    if (this.cold) {
      console.log(`достать ${this.brand} ${this.variety} из холодильника`)
      this.setTemperature(FRIDGE_TEMP)
    } else {
      console.log(`достать ${this.brand} ${this.variety} из полки`)
      this.setTemperature(ROOM_TEMP)
    }

    console.log(`налить ${this.name} в стакан `)
  }
}

class Tea extends Drink {

  constructor( name, size, price, brewing, sugar) {
    super(name, size, price);
    this.sugar = sugar;
    this.brewing = brewing;
  }

  getInfo() {
    return super.getInfo({sugar: this.sugar, brewing: this.brewing});
  }

  _prepare() {
    console.log('вскипятить чайник ')
    console.log(`заварить ${this.brewing}`)
    console.log('налить в чашку')
    this.setTemperature(BOILING_TEMP)
    if (this.sugar) {
      console.log(`добавить ${this.sugar} ложки сахара`)
    }
  }
}

class Coffee extends Drink {

  constructor( name, size, price, beans, sugar, milk) {
    super(name, size, price);
    this.sugar = sugar;
    this.beans = beans;
    this.milk = milk;
  }

  getInfo() {
    return super.getInfo({sugar: this.sugar, beans: this.beans, milk: this.milk});
  }

  _prepare() {
    console.log(`заварить ${this.beans}`)
    console.log('налить в чашку')
    this.setTemperature(BOILING_TEMP)
    if (this.sugar) {
      console.log(`добавить ${this.sugar} ложки сахара`)
    }
    if (this.milk) {
      console.log(`добавить молоко`)
    }
  }
}

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `${this.name}, ${this.location}`;
  }

  orderDrink(drink) {
    console.log(`Заказ принят!`);
    drink.serve();
  }
}

const cafe = new Cafe('Уют', 'Центр');
const tea = new Tea('Ассам', 0.5, 120, 'черный', 2);
cafe.orderDrink(tea);


