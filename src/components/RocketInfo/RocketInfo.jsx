import './style.scss';
import useRocketInfo from '../../hooks/useRocketInfo';
import TableInfo from '../TableInfo';

function RocketInfo({ name, rocket, engine, isEngine }) {
  console.log(name);
  const tableContent = useRocketInfo({ name, rocket, engine, isEngine });
  return (
    <div className='container d-flex flex-column justify-content-around'>
      <div
        className={`d-flex row flex-md-row${
          isEngine ? '-reverse' : ''
        } justify-content-between flex-column py-5`}
      >
        <TableInfo />
        <div className='col col-md-4 d-flex justify-content-center'>
          <img src={tableContent.img} alt={name} />
        </div>
      </div>
    </div>
  );
}
export default RocketInfo;
