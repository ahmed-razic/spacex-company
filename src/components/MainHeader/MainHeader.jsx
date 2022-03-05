import './style.scss';
import { FaTwitter, FaFlickr, FaFacebook, FaChrome } from 'react-icons/fa';

function MainHeader({ data }) {
  return (
    <div className='header__container'>
      <div className='container'>
        <h1 className='header__name'>{data.company.name}</h1>
        <p className='header__description'>{data.company.summary}</p>
      </div>
      <div className='container'>
        <p>
          Address{' '}
          <span>
            {data.company.headquarters.address},{data.company.headquarters.city}
            ,{data.company.headquarters.state}
          </span>
        </p>
        <p>
          Number of employess <span>{data.company.employees}</span>
        </p>
        <p>
          Valuation <span>${data.company.valuation}</span>
        </p>
      </div>
      <div className=' container'>
        <div className='row row-cols-4'>
          <div className='col'>
            <p>CEO</p>
            <p>
              <span>{data.company.ceo}</span>{' '}
            </p>
          </div>
          <div className='col'>
            <p>COO</p>
            <p>
              <span>{data.company.coo}</span>{' '}
            </p>
          </div>
          <div className='col'>
            <p>CTO</p>
            <p>
              <span>{data.company.cto}</span>{' '}
            </p>
          </div>
          <div className='col'>
            <p>Propulsion</p>
            <p>
              <span>{data.company.cto_propulsion}</span>{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row row-cols-4'>
          <a href={data.company.links.elon_twitter} className='col'>
            <FaTwitter fill='#fff' size={24} /> Elon
          </a>
          <div className='col'>
            <a href={data.company.links.twitter} className='col'>
              <FaTwitter fill='#fff' size={24} /> Twitter
            </a>
          </div>
          <div className='col'>
            <a href={data.company.links.flickr}>
              <FaFlickr fill='#fff' size={24} /> Flickr
            </a>
          </div>
          <div className='col'>
            <a href={data.company.links.website}>
              <FaChrome fill='#fff' size={24} /> Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainHeader;
