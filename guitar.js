class ClassicGuitar {
  #id;
  constructor(manufactureYear, brand, price, numberOfString = 6, id) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.numberOfString = numberOfString;
    this.used = false;
    this.#id = id;
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
  constructor(manufactureYear, brand, price, numberOfString = 6, id, longNeck) {
    super(manufactureYear, brand, price, (numberOfString = 6), id);
    this.longNeck = longNeck;
  }
  play() {
    this.used = true;
    this.price = this.price * 0.9;
    console.log("🎸🎸🎸");
  }
}

class BassGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString, id) {
    super(manufactureYear, brand, price, (numberOfString = 4), id);
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
