import React, { useState, useEffect } from 'react';
import RestaurantList from './components/restaurants/RestaurantList';
import Home from './components/restaurants/Home';
import AddForm from './components/restaurants/AddForm';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { finalURL } from './components/restaurants/Globals';
import ListItem from '@material-ui/core/ListItem';


const App = () => {
  
  const [restaurants, setRestaurants] = useState([]);

  
 //GET request for the List page
  useEffect(() => {

    const fetchRestaurants = async () => {
      const response = await fetch(finalURL);
      const data = await response.json();
      setRestaurants(data);
    }

    fetchRestaurants();
  }, [])



  const [addCardData, setAddCardData] = useState({
    name: '',
    phone: '',
    linkToGoogleMaps: '',
    website: '',
  
  });
  

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setAddCardData({
      ...addCardData, [e.target.id]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch((finalURL), {
    method: "POST",  
    headers: {
    "Content-Type":"application/json"
   },
   body: JSON.stringify(addCardData),
   
 });
 const submittedArray = [...submittedData, addCardData];
 setSubmittedData(submittedArray);
 setAddCardData({name: '', phone: '', linkToGoogleMaps: '', website: ''});
  }

const listOfSubmissions = submittedData.map((data,index)=> {
  return (
    <div key={index}>
      <ListItem>
       <h1>{data.name}</h1>
       <ul>
           <li><a href={`tel:${data.phone}`}>Call</a></li>
           <li><a href={data.website}>Website</a></li>
           <li><a href={data.linkToGoogleMaps}>Link to Google Maps</a></li>
       </ul>
       </ListItem>
    </div>
  )
})


 
  return (
    <React.Fragment>
    <Router>
       <NavBar />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element= {<RestaurantList restaurants={restaurants} listOfSubmissions={listOfSubmissions} />} />
          <Route path='/add' element= { 
            <AddForm handleChange={handleChange}
              handleSubmit={handleSubmit}
              name={addCardData.name}
              phone={addCardData.phone}
              linkToGoogleMaps={addCardData.linkToGoogleMaps}
              website={addCardData.website}  
            />} 
          />
      </Routes>
    </Router>
    </React.Fragment>
  );

}

export default App;
