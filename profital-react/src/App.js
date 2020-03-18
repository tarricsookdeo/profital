import React from 'react';
import Navbar from './components/layout/Navbar';
import Watchlist from './views/Watchlist';
import Search from './views/Search';
import Tickers from './components/watchlist/Tickers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Watchlist} />
          <Route path='/search' exact component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
