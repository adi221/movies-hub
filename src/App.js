import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, SingleItem, SearchPage, Discover, Error } from './pages';
import { Footer, ScrollToTop } from './components';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/details/:type/:id' children={<SingleItem />} />
        <Route exact path='/search-results'>
          <SearchPage />
        </Route>
        <Route exact path='/discover'>
          <Discover />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
