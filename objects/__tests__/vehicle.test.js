'use strict';

const Vehicle = require('../vehicle-factory.js');
// const Vehicle = require('../vehicle-constructor.js');
// const Vehicle = require('../vehicle-class.js');


describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});

const FlyingVehicle = require('../flying-vehicle-factory.js');
// const FlyingVehicle = require('../flying-vehicle-constructor.js');
// const FlyingVehicle = require('../flying-vehicle-class.js');

describe('FlyingVehicle', () => {

  describe('Airplane', () => {
    let flyer = new FlyingVehicle.Airplane('flyer', 4, 132);

    it('has 2 wings', () => {
      expect(flyer.wings).toEqual(2);
    });

    it('can land', () => {
      expect(flyer.land()).toBeTruthy();
    });

    it('cannot land vertically', () => {
      expect(flyer.verticaleLand).toBeUndefined();
    });
  });

  describe('Helocopter', () => {
    let chopper = new FlyingVehicle.Helicopter('choppy', 5);
    
    it('has one engine', () => {
      expect(chopper.engines).toEqual(1);
    });

    it('can land vertically', () => {
      expect(chopper.verticaleLand()).toBeTruthy();
    });

  });

});






















