import './style.scss';
import { FaTwitter, FaFlickr, FaChrome } from 'react-icons/fa';

function MainHeader({ data }) {
  const valuation = data.company.valuation.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className='header__container'>
      <div className='container mb-4'>
        <h1 className='header__name d-flex justify-content-center'>
          {data.company.name}
        </h1>
        <p className='header__description'>{data.company.summary}</p>
      </div>
      <div className='container mb-4 '>
        <div className='row row-cols-4 '>
          <div>
            <p>CEO</p>
            <p>
              <span>{data.company.ceo}</span>
            </p>
          </div>
          <div>
            <p>Address </p>
            <p>
              <span>
                {data.company.headquarters.address},{' '}
                {/* {data.company.headquarters.city},{' '} */}
                {data.company.headquarters.state}
              </span>
            </p>
          </div>
          <div>
            <p>Number of employees</p>
            <p>
              <span> {data.company.employees}</span>
            </p>
          </div>
          <div>
            <p>Valuation</p>
            <p>
              <span> {valuation}</span>
            </p>
          </div>
        </div>
      </div>
      {/*  <div className=' container mb-4'>
        <div className='row row-cols-4'>
          <div>
            <p>CEO</p>
            <p>
              <span>{data.company.ceo}</span>{' '}
            </p>
          </div>
          <div>
            <p>COO</p>
            <p>
              <span>{data.company.coo}</span>{' '}
            </p>
          </div>
          <div>
            <p>CTO</p>
            <p>
              <span>{data.company.cto}</span>{' '}
            </p>
          </div>
          <div>
            <p>Propulsion</p>
            <p>
              <span>{data.company.cto_propulsion}</span>{' '}
            </p>
          </div>
        </div>
      </div> */}
      <div className='container mb-4'>
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
