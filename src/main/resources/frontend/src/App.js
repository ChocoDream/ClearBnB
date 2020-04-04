import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyPage from './pages/MyPage';
import About from './pages/About';
import Residences from './pages/Residences';
import ResidencePage from './pages/ResidencePage';
  
import NavMenu from './components/NavMenu';
import NewResidence from './pages/NewResidence';
import ResidenceContextProvider from './contexts/ResidenceContextProvider'
import ResidenceConProvider from './contexts/ResidenceConProvider'
import AddressContextProvider from './contexts/AddressContextProvider'
import UserContextProvider from './contexts/UserContextProvider'
import CityContextProvider from './contexts/CityContextProvider'
import AmenityContextProvider from './contexts/AmenityContextProvider'

const App = () => {
  return (
    <div className="App">
      <ResidenceContextProvider>
        <ResidenceConProvider>
          <AddressContextProvider>
            <CityContextProvider>
              <UserContextProvider>
                <AmenityContextProvider>
                <Router>
                  <NavMenu />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/user-login" component={Login} />
                    <Route exact path="/user-register" component={Register} />
                    <Route exact path="/mypage" component={MyPage} />
                    <Route exact path="/residences" component={Results} />
                <Route exact path="/residences/:id" children={<ResidencePage />} />
                </Router>
                </AmenityContextProvider>
              </UserContextProvider> 
            </CityContextProvider>
          </AddressContextProvider>
        </ResidenceConProvider>
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
