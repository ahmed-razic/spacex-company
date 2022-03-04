import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import Home from './pages/Home/Home';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  </ApolloProvider>
);

export default App;
