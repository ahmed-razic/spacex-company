import './style.scss';
import { gql, useQuery } from '@apollo/client';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import LaunchesList from '../../components/LaunchesList';

function Launches() {
  const GET_LAUNCHES_DATA = gql`
    {
      launchesPast(limit: 15) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        rocket {
          rocket_name
        }
        links {
          article_link
          video_link
          wikipedia
          flickr_images
        }
        id
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_LAUNCHES_DATA);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  const launches = data.launchesPast.filter(
    (item) =>
      item.links.article_link &&
      item.links.video_link &&
      item.links.flickr_images.length > 0
  );

  return (
    <>
      <h1 className='display-5 text-center m-5'>Previous Launches</h1>
      <LaunchesList launches={launches} />
    </>
  );
}
export default Launches;
