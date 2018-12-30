'use strict';

const FlyingVehicle = () => ({
  takeoff: () => {
    return 'Taking off';
  },

  land: () => {
    return 'Landing';
  },
});

function Airplane(name, engines, passengers) {
  let plane = Object.assign(
    {},
    {name},
    {engines},
    {wings: 2},
    {passengers},
    FlyingVehicle()
  );

  return plane;
}

function Helicopter(name, passengers) {
  let chopper = Object.assign(
    {},
    {name},
    {engines: 1},
    {wings: 0},
    {passengers},
    FlyingVehicle(),
    {verticaleLand}
  );

  function verticaleLand() {return 'I can land anywhere';}

  return chopper;
}

module.exports = { Airplane, Helicopter};
