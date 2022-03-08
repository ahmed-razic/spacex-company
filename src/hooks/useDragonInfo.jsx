function useDragonInfo({ name, dragon }) {
  const {
    diameter,
    dry_mass_kg,
    dry_mass_lb,
    first_flight,
    heat_shield,
    thrusters,
    launch_payload_mass,
  } = dragon;

  const header = name.toUpperCase();

  const firstRow = {
    title: 'FIRST FLIGHT',
    value: first_flight,
  };

  const secondRow = {
    title: 'DIAMETER',
    value: diameter.meters + ' m/ ' + diameter.feet + ' ft',
  };
  const thirdRow = {
    title: 'DRY MASS',
    value: dry_mass_kg + ' kg/ ' + dry_mass_lb + ' lb',
  };

  const fourthRow = {
    title: 'PAYLOAD MASS',
    value: launch_payload_mass.kg + ' kg/ ' + launch_payload_mass.lb + ' lb',
  };

  const fifthRow = {
    title: 'SHIELD MATERIAL',
    value:
      heat_shield.material + ' max temp ' + heat_shield.temp_degrees + ' °C',
  };

  const sixthRow = {
    title: 'THRUSTERS',
    value: thrusters.type + ' ' + thrusters.amount + ' pcs',
  };

  const seventhRow = {
    title: 'FUEL 1',
    value: thrusters.fuel_1,
  };

  const eightRow = {
    title: 'FUEL 2',
    value: thrusters.fuel_2,
  };
  const ninthRow = {
    title: 'THRUST',
    value: thrusters.thrust.kN + ' kN/ ' + thrusters.thrust.lbf + ' lbf ',
  };

  const body = [
    firstRow,
    secondRow,
    thirdRow,
    fourthRow,
    fifthRow,
    sixthRow,
    seventhRow,
    eightRow,
    ninthRow,
  ];

  const img = `../assets/${name.replace(/\s+/g, '')}.png`;

  return { header, body, img };
}
export default useDragonInfo;
