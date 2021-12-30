import React, { useState, useEffect } from 'react';
import Search from './components/restaurants/Search';
import Map from './components/restaurants/Map';
import Fav from './components/restaurants/Fav';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { baseURL } from './Globals';

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {

    // fetch to db.json
    // "set restaurants to array of restaurants from db.json"

    // fetch(baseURL + '/restaurants');
    //  .then(resp => resp.json())
    //  .then(data => console.log('data', data))

    const fetchRestaurants = async () => {
      const response = await fetch(baseURL + '/restaurants');
      const data = await response.json();
      setRestaurants(data);
    }

    fetchRestaurants();
  }, [])

  return (
    <Router>
       <NavBar />
       <Routes>
          <Route path='/' element={<Search restaurants={restaurants} />} />
          <Route path='/map' element= {<Map />} />
          <Route path='/fav' element={ <Fav />} />
      </Routes>
    </Router>
  );
}

export default App;
