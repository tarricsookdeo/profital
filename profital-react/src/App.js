import React from 'react';
import Navbar from './components/layout/Navbar';
import Watchlist from './views/Watchlist';
import Search from './components/SearchForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Search />
        <Switch>
          <Route path='/' exact component={Watchlist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
