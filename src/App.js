import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, SingleItem, SearchPage, Discover } from './pages';
// import { ScrollTopArrow } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/details/:type/:id' children={<SingleItem />} />
        <Route path='/search-results'>
          <SearchPage />
        </Route>
        <Route path='/dicover'>
          <Discover />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
