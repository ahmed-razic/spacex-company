import './style.scss';
import RocketHeader from '../RocketHeader';

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
  } = rocketData;

  return (
    <>
      <div className='rocket__container d-flex flex-column align-items-center justify-content-around'>
        <RocketHeader id={id} name={name} />
      </div>
    </>
  );
}
export default Rocket;
