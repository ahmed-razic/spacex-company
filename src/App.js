import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Launches from './pages/Launches/Launches';
import Rockets from './pages/Rockets/Rockets';

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
          <Route path='/launches' element={<Launches />}></Route>
          <Route path='/rockets/:id' element={<Rockets />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;
