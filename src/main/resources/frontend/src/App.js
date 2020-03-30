import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Search from './pages/Search';
import NavMenu from './components/NavMenu';
import ResidenceContextProvider from './contexts/ResidenceContextProvider'
import UserContextProvider from './contexts/UserContextProvider'
import CityContextProvider from './contexts/CityContextProvider'

const App = () => {
  return (
    <div className="App">
      <ResidenceContextProvider>
        <CityContextProvider>
          <UserContextProvider>
            <Router>
              <NavMenu />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/user-login" component={Login} />
                <Route exact path="/user-register" component={Register} />
            </Router>
          </UserContextProvider> 
        </CityContextProvider>
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
