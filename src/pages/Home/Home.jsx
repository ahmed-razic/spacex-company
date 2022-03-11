import './style.scss';
import { gql, useQuery } from '@apollo/client';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import MainHeader from '../../components/MainHeader';

function Home() {
  const GET_COMPANY_INFO = gql`
    {
      company {
        name
        summary
        ceo
        coo
        cto
        cto_propulsion
        employees
        headquarters {
          address
          city
          state
        }
        links {
          elon_twitter
          flickr
          twitter
          website
        }
        valuation
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_COMPANY_INFO);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return <div className='home__container'>{<MainHeader data={data} />}</div>;
}
export default Home;
