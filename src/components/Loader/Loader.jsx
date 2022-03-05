import './style.scss';

function Loader() {
  return (
    <div className='loader__container d-flex flex-column justify-content-center align-items-center'>
      <p>Loading</p>
      <div className='loader__animation'>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
export default Loader;
