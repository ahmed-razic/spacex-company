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
  date = date.slice(0, 10);

  return (
    <div className='d-flex justify-content-center position-relative m-5'>
      <img src={flickr[0]} alt={mission} className='launch_image' />
      <div className='launch_info p-4'>
        <a href={article} target='_blank' rel='noopener noreferrer'>
          <h2>{mission}</h2>
        </a>
        <p>{site}</p>
        <small>{date}</small>
        <p className='fs-4 mb-5'>{rocket}</p>
        <p>
          <a href={wiki} target='_blank' rel='noopener noreferrer'>
            Wikipedia
          </a>
        </p>
        <p>
          <a href={video} target='_blank' rel='noopener noreferrer'>
            Youtube
          </a>
        </p>
      </div>
    </div>
  );
}
export default LaunchesItem;
