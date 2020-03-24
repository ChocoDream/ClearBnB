import React from 'react';
import Home from './pages/Home'
import ResidenceContextProvider from './contexts/ResidenceContextProvider'

const App = () => {
  return (
    <div className="App">
      <ResidenceContextProvider>
        <Home/>
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
