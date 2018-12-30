'use strict';

class FlyingVehicle {
  constructor(name, engines, wings, passengers) {
    this.name = name;
    this.engines = engines;
    this.wings = wings;
    this.passengers = passengers;
  }

  takeoff() {
    return 'Taking off';
  }

  land() {
    return 'Landing';
  }
}

class Airplane extends FlyingVehicle {
  constructor(name, engines, passengers) {
    super(name, engines, passengers);
    this.wings = 2;
  }
}

class Helicopter extends FlyingVehicle {
  constructor(name, passengers) {
    super(name, passengers);
    this.engines = 1;
    this.wings = 0;
  }

  verticaleLand() {
    return 'I can land anywhere';
  }
}

module.exports = {Airplane, Helicopter};