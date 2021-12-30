import React from 'react';
import Search from './components/Search';
import Map from './components/Map';
import Fav from './components/Fav';
import NavBar from './navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
       <NavBar />
       <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/browse' element= {<Map />} />
          <Route path='/fav' element={ <Fav />} />
      </Routes>
    </Router>
  );
}

export default App;
