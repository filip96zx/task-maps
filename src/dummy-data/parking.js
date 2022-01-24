class Parking {
  constructor() {
    this.discriminator = "parking";
    this.address = {
      street: "Bałuckiego",
      house: "18",
      city: "Wrocław"
    };
    this.spacesCount = Math.floor(Math.random() * 20);
    this.availableSpacesCount = Math.floor(Math.random() * 4);
    this.chargers = [];
    this.color = {
      rgb: "ffffff",
      alpha: 0.5
    };
    this.pictureId = null;
    this.id = new Date().toISOString() + Math.random();
    this.name = "Bałuckiego";
    this.description = "Bałuckiego";
    this.location = {
      latitude: 51.101935 + (Math.random() - 0.5 / 3),
      longitude: 17.02744 + (Math.random() - 0.5 / 4)
    };
    this.metadata = null;

    if (Math.random() > 0.7) this.chargers.push(1);

  }
}

export function getXDummyParkings(count) {
  const list = [];

  for (let i = 0; i < count; i++) {
    list.push(new Parking());
  }
  return list;
}