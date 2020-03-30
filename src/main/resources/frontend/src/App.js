import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Search from './pages/Search';
import NavMenu from './components/NavMenu';
import ResidenceContextProvider from './contexts/ResidenceContextProvider'

const App = () => {
  return (
    <div className="App">
      <ResidenceContextProvider>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user-login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
