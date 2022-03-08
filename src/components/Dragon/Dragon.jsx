import './style.scss';
import DragonHeader from '../DragonHeader';
import DragonInfo from '../DragonInfo';

function Dragon({ dragon }) {
  const {
    id,
    description,
    diameter,
    dry_mass_kg,
    dry_mass_lb,
    first_flight,
    heat_shield,
    name,
    thrusters,
    launch_payload_mass,
    wikipedia,
  } = dragon;
  return (
    <div className='dragon__container d-flex flex-column align-items-center justify-content-around'>
      <DragonHeader
        id={id}
        name={name}
        description={description}
        wiki={wikipedia}
      />
      <DragonInfo
        name={name}
        dragon={{
          diameter,
          dry_mass_kg,
          dry_mass_lb,
          first_flight,
          heat_shield,
          thrusters,
          launch_payload_mass,
        }}
      />
    </div>
  );
}
export default Dragon;
