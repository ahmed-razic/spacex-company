import './style.scss';
import useDragonInfo from '../../hooks/useDragonInfo';
import DragonTableInfo from '../DragonTableInfo';

function DragonInfo({ name, dragon }) {
  const tableContent = useDragonInfo({ name, dragon });
  return (
    <div className='container d-flex flex-column justify-content-around'>
      <div className='d-flex row flex-md-row justify-content-between flex-column py-5'>
        <DragonTableInfo title={tableContent.header} data={tableContent.body} />
        <div className='col col-md-4 d-flex justify-content-center'>
          <img src={tableContent.img} alt={name} />
        </div>
      </div>
    </div>
  );
}
export default DragonInfo;
