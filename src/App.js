import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;
