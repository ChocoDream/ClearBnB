import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Search from './pages/Search';
import Results from './pages/Results';
import NavMenu from './components/NavMenu';
import ResidenceContextProvider from './contexts/ResidenceContextProvider'
import UserContextProvider from './contexts/UserContextProvider'
import CityContextProvider from './contexts/CityContextProvider'
import AmenityContextProvider from './contexts/AmenityContextProvider'

const App = () => {
  return (
    <div className="App">
      <ResidenceContextProvider>
        <CityContextProvider>
          <UserContextProvider>
            <AmenityContextProvider>
            <Router>
              <NavMenu />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/user-login" component={Login} />
                <Route exact path="/user-register" component={Register} />
                <Route exact path="/residences" component={Results} />
            </Router>
            </AmenityContextProvider>
          </UserContextProvider> 
        </CityContextProvider>
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
