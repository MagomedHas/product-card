class TV {
	constructor(brand, model){
		this.maxChannel = 99;
		this.channel = 1;
		this.brand = brand;
		this.model = model;
	}

	info(){
		console.log(`Телевизор фирмы ${this.brand}\nМодель ${this.model}`)
	}

	nextChannel(){
		this.channel = this.channel < this.maxChannel ? this.channel + 1 : 1;
		console.log(`Канал ${this.channel}`)
	}

	previousChannel(){
		this.channel = this.channel > 1 ? this.channel - 1 : this.maxChannel;
		console.log(`Канал ${this.channel}`)
	}
}

class SmartTV extends TV{
	constructor(brand, model, os) {
		super(brand, model);
		this.os = os;
	}

	info(){
		console.log(`Телевизор фирмы ${this.brand}\nмодель ${this.model}\n OS ${this.os}`);
	}

	openSmartMenu() {
		console.log(`Добро пожаловать в ${this.os}`)
	}
}