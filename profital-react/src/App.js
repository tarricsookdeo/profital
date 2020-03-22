import React from 'react';
import Navbar from './components/layout/Navbar';
import Watchlist from './views/Watchlist';
import Search from './views/Search';
import Earnings from './views/Earnings';
import FetchEarnings from './components/earnings/FetchEarnings';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <FetchEarnings />
        <Switch>
          <Route path='/' exact component={Watchlist} />
          <Route path='/search' exact component={Search} />
          <Route path='/earnings' exact component={Earnings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
