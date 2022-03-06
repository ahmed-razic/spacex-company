import './style.scss';

function LaunchesItem({
  date,
  site,
  article,
  flickr,
  video,
  wiki,
  mission,
  rocket,
}) {
  return (
    <div className='d-flex justify-content-center position-relative my-4'>
      <img src={flickr[0]} alt={mission} className='launch_image' />
      <div className='launch_info'>
        <a href={article} target='_blank' rel='noopener noreferrer'>
          {mission} <small>{date}</small>
        </a>{' '}
        <p>{site}</p>
        <p>{rocket}</p>
        <a href={wiki} target='_blank' rel='noopener noreferrer'>
          Wikipedia
        </a>{' '}
        <br />
        <a href={video} target='_blank' rel='noopener noreferrer'>
          Youtube
        </a>
      </div>
    </div>
  );
}
export default LaunchesItem;
