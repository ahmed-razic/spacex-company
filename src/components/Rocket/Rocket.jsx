import './style.scss';
import RocketHeader from '../RocketHeader';
import RocketInfo from '../RocketInfo';

function Rocket({ rocketData }) {
  const {
    cost_per_launch,
    description,
    diameter,
    engines,
    height,
    id,
    mass,
    name,
    wikipedia,
    stages,
  } = rocketData;

  return (
    <>
      <div className='rocket__container d-flex flex-column align-items-center justify-content-around'>
        <RocketHeader
          id={id}
          name={name}
          description={description}
          wiki={wikipedia}
        />
        <RocketInfo
          name={name}
          rocket={{ cost: cost_per_launch, diameter, stages, height, mass }}
        />
        <RocketInfo name={engines.type} engine={engines} isEngine />
      </div>
    </>
  );
}

export default Rocket;
