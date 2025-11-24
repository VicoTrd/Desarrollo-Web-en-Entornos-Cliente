class Car {
  model = "";
  milesPerGallon = 0;
  tank = 0;
  odometer = 0;

  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
  }

  fill(gallons) {
    this.tank += gallons;
  }

  drive(distance) {
    const possibleDistance = this.tank * this.milesPerGallon;

    if (distance <= possibleDistance) {
      this.odometer += distance;
      this.tank -= distance / this.milesPerGallon;
    } else {
      this.odometer += possibleDistance;
      this.tank = 0;
      console.log("No tiene gasolina");
    }
  }
}
