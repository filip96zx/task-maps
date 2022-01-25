class Poi {
  constructor() {

    this.discriminator = "poi";
    this.id = new Date().toISOString() + Math.random();
    this.name = "Narodowe Forum Muzyki";
    this.description = "Narodowe Forum Muzyki";
    this.location = {
      latitude: 51.101935 + (Math.random() - 0.5 / 1.5),
      longitude: 17.02744 + (Math.random() - 0.5 / 4)
    };
    this.metadata = {};
    this.address = {
      street: null,
      house: null,
      city: "Wrocław"
    };
    this.category = "Ciekawe miejsca";
    this.picture = null;
    this.color = {
      rgb: "ffffff",
      alpha: 0.5
    };
  }

}

export function getXDummyPoi(count) {
  const list = [];

  for (let i = 0; i < count; i++) {
    list.push(new Poi());
  }
  return list;
}