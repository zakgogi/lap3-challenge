import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Home, Repo, RepoDetails } from './pages';
import { Header } from './layout';
// import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/repo'>
          <Repo />
        </Route>
        <Route exact path='/repodetails'>
          <RepoDetails />
        </Route>
      </Switch>
    </>
  );
}

export default App;