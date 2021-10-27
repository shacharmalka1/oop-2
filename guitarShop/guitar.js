const fs = require("fs");
const usersPath = `C:/dev/cyber4s/oop-2/guitarShop/guitarCollection`;
const guitarsArray = fs.readdirSync(usersPath);

class ClassicGuitar {
  #id;
  constructor(manufactureYear, brand, price, numberOfString = 6) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.numberOfString = numberOfString;
    this.used = false;
    this.#id = guitarsArray + 1;
  }
  play() {
    console.log("🎶🎶🎶");
    if (this.used === false) {
      this.price = this.price * 0.9;
    }
    this.used = true;
  }
  get getPrice() {
    return this.price;
  }
  set setPrice(newPrice) {
    this.price = newPrice;
  }
  get getManufactureYear() {
    return this.manufactureYear;
  }
  get getBrand() {
    return this.brand;
  }
  get getId() {
    return this.#id;
  }
  static detectSound(sound) {
    if (sound === "🔊") {
      return "Bass Guitar";
    }
    if (sound === "🎸") {
      return "Electric Guitar";
    }
  }
}

class ElectricGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString = 6, longNeck) {
    super(manufactureYear, brand, price, numberOfString);
    this.longNeck = longNeck;
  }
  play() {
    this.used = true;
    this.price = this.price * 0.9;
    console.log("🎸🎸🎸");
  }
}

class BassGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString = 4) {
    super(manufactureYear, brand, price, numberOfString);
  }
  play() {
    this.used = true;
    this.price = this.price * 0.9;
    console.log("🔊🔊🔊");
  }
  playSolo() {
    let list = ["💥", "🤘", "🎵", "📢", "💢", "🕺"]
      .sort(() => Math.random() - 0.5)
      .join();
    return list;
  }
}

let bass = new BassGuitar("1971", "fender", "3899", 6);
console.log(bass);
bass.play();
console.log(bass.getId);

let electric = new ElectricGuitar("1971", "fender", "3899", 6, 99);
console.log(electric);
electric.play();
console.log(electric.getId);
