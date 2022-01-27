import React, { useState, useEffect } from 'react';
import RestaurantList from './components/restaurants/RestaurantList';
import Home from './components/restaurants/Home';
import AddForm from './components/restaurants/AddForm';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { finalURL } from './components/restaurants/Globals';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  


}));

const App = () => {
  const classes = useStyles();

  const [restaurants, setRestaurants] = useState([]);

  
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
    city: '',
    phone: '',
    linkToGoogleMaps: '',
    website: '',
  
  });
  
  const [open, setOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const handleListClick = () => {
    setOpen(!open)
}

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
   body: JSON.stringify(addCardData)
   
 })
 .then(r => r.json()) 
 .then(data => {
  const submittedArray = [...submittedData, data];
  setSubmittedData(submittedArray);
  setAddCardData({name: '', city: '', phone: '', linkToGoogleMaps: '', website: ''});
 })
  }

const listOfSubmissions = submittedData.map((data,index)=> {
  return (
    <div>
    <div className={classes.div} key={index}>
      <ListItem>
       <button onClick={handleListClick}><h1 className={classes.heading}>{data.name} | {data.city}</h1></button>
       </ListItem>
    </div>
    {open && (
            <div className={classes.popup}>
                <p>Hi</p>
            </div>
        )}
    </div>
  )
})

 
  return (
    <React.Fragment>
    <Router>
       <NavBar />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element= {<RestaurantList key="list" restaurants={restaurants} listOfSubmissions={listOfSubmissions} />} />
          <Route path='/add' element= { 
            <AddForm handleChange={handleChange}
              handleSubmit={handleSubmit}
              name={addCardData.name}
              city={addCardData.city}
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
