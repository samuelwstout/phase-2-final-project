import React, { useState, useEffect } from 'react';
import Search from './components/restaurants/Search';
import Map from './components/restaurants/Map';
import Add from './components/restaurants/Add';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { finalURL } from './components/restaurants/Globals';


const App = () => {
  
  //GET request for Search page
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {

    const fetchRestaurants = async () => {
      const response = await fetch(finalURL);
      const data = await response.json();
      setRestaurants(data);
    }

    fetchRestaurants();
  }, [])

 
  return (
    <React.Fragment>
    <Router>
       <NavBar />
       <Routes>
          <Route path='/' element={<Search restaurants={restaurants} />} />
          <Route path='/map' element= {<Map />} />
          <Route path='/add' element={ <Add  />} />
      </Routes>
    </Router>
    </React.Fragment>
  );

}

export default App;
