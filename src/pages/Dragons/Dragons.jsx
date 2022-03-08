import './style.scss';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import Dragon from '../../components/Dragon';

function Dragons() {
  const params = useParams();
  const dragonId = params.id;

  const GET_DRAGON_DATA = gql`
    query GET_DRAGON_DATA($dragonId: ID!) {
      dragon(id: $dragonId) {
        id
        description
        diameter {
          feet
          meters
        }
        dry_mass_kg
        dry_mass_lb
        first_flight
        heat_shield {
          material
          temp_degrees
        }
        name
        thrusters {
          amount
          fuel_1
          fuel_2
          thrust {
            kN
            lbf
          }
          type
        }
        launch_payload_mass {
          kg
          lb
        }
        wikipedia
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_DRAGON_DATA, {
    variables: { dragonId },
  });

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  const dragon = { ...data.dragon };
  console.log(dragon);

  return <Dragon />;
}
export default Dragons;
