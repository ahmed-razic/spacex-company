import './style.scss';

function RocketHeader({ id, name, description, wiki }) {
  const imageStyle = {
    backgroundImage: `url(../assets/${id}.jpg)`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <div className='d-flex flex-column justify-content-between w-100'>
      <div style={imageStyle}>
        <div className='header__container d-flex flex-column align-items-center'>
          <div className='header__text'>{name}</div>
          <div className='header__description'>{description}</div>
          <p className='header__wiki'>
            <a href={wiki}>Wikipedia</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default RocketHeader;
