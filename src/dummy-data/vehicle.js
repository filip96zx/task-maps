class Vehicle {
  constructor() {
    this.discriminator = "vehicle";
    this.platesNumber = "WZPV001";
    this.sideNumber = "Z3-PVAN-01";
    this.color = "White";
    this.type = Math.random() > 0.7 ? "TRUCK" : "CAR";
    this.picture = {
      id: "e7ace1de-ab7f-4120-922d-23441a041bd9",
      name: "e7ace1de-ab7f-4120-922d-23441a041bd9",
      extension: null,
      contentType: null
    };
    this.rangeKm = Math.floor(Math.random() * 400);
    this.batteryLevelPct = Math.floor(Math.random() * 100);
    this.reservationEnd = null;
    this.reservation = null;
    this.status = Math.random() > 0.5 ? "AVAILABLE" : 'INACCESSIBLE';
    this.locationDescription = null;
    this.address = null;
    this.mapColor = {
      rgb: "ffffff",
      alpha: 0.5
    };
    this.promotion = null;
    this.id = new Date().toISOString()+Math.random();
    this.name = "Enigma Python Van";
    this.description = null;
    this.location = {
      latitude: 51.101935 + (Math.random() - 0.5 / 1.5),
      longitude: 17.02744 + (Math.random() - 0.5 / 4)
    };
    this.metadata = null;
  }

}

export function getXDummyVehicles(count) {
  const list = [];

  for (let i = 0; i < count; i++) {
    list.push(new Vehicle());
  }
  return list;
}