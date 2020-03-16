import React from 'react';
import Navbar from './components/layout/Navbar';
import Watchlist from './views/Watchlist';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Watchlist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
