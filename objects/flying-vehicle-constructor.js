'use strict';

const FlyingVehicle = function(name, engines, wings, passengers) {
  this.name = name;
  this.engines = engines;
  this.wings = wings;
  this.passengers = passengers;
};

FlyingVehicle.prototype.takeoff = () => {
  return 'Taking off';
};

FlyingVehicle.prototype.land = () => {
  return 'Landing';
};

const Airplane = function(name, engines, passengers) {
  FlyingVehicle.call(this, name, engines, 2, passengers);
};

Airplane.prototype = new FlyingVehicle();

const Helicopter = function(name, passengers) {
  FlyingVehicle.call(this, name, 1, 0, passengers);
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.verticaleLand = () => {
  return 'I can land anywhere';
};

module.exports = {Airplane, Helicopter};







