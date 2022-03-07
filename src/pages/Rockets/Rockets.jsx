import './style.scss';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Rocket from '../../components/Rocket';

function Rockets() {
  const params = useParams();
  const rocketId = params.id;

  const GET_ROCKETS_DATA = gql`
    query GET_ROCKET_DATA($rocketId: ID!) {
      rocket(id: $rocketId) {
        description
        name
        height {
          feet
          meters
        }
        mass {
          kg
          lb
        }
        diameter {
          feet
          meters
        }
        engines {
          propellant_1
          propellant_2
          thrust_to_weight
          type
          number
          thrust_vacuum {
            kN
            lbf
          }
        }
        wikipedia
        cost_per_launch
        id
        stages
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_ROCKETS_DATA, {
    variables: { rocketId },
  });

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  const rocketData = { ...data.rocket };

  return <Rocket rocketData={rocketData} />;
}

export default Rockets;
