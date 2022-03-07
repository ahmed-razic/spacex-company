function useRocketInfo({ name, rocket, engine, isEngine }) {
  const header = name.toUpperCase();

  const firstRow = {
    title: isEngine ? 'NUMBER' : 'HEIGHT',
    value: isEngine
      ? engine.number
      : rocket.height.meters + ' m/ ' + rocket.height.feet + ' /ft',
  };
  const secondRow = {
    title: isEngine ? 'PROPELLANT1' : 'DIAMETER',
    value: isEngine
      ? engine.propellant_1
      : rocket.diameter.meters + ' m/ ' + rocket.diameter.feet + ' /ft',
  };

  const thirdRow = {
    title: isEngine ? 'PROPELLANT2' : 'STAGES',
    value: isEngine ? engine.propellant_2 : rocket.stages,
  };

  const fourthRow = {
    title: isEngine ? 'THRUST IN VACUMM' : 'MASS',
    value: isEngine
      ? engine.thrust_vacuum.kN + ' kN/ ' + engine.thrust_vacuum.lbf + ' /lbf '
      : rocket.mass.kg + ' kg/ ' + rocket.mass.lb + ' /lb',
  };

  const fifthRow = {
    title: isEngine ? 'THRUST TO WEIGHT' : 'COST PER LAUNCH',
    value: isEngine ? engine.thrust_to_weight : rocket.cost,
  };
  const body = [firstRow, secondRow, thirdRow, fourthRow, fifthRow];

  const img = `../assets/${name.replace(/\s+/g, '')}.png`;

  return { header, body, img };
}
export default useRocketInfo;
