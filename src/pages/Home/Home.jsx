import './style.scss';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import { Fragment } from 'react';

function Home() {
  return (
    <Fragment>
      <Loader />
      <Error error={{ message: 'There was an error, please try again.' }} />
    </Fragment>
  );
}
export default Home;
