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
  listitems: {
      border: "1px solid",
      marginBottom: 30

  },
  div: {
      display: "block",
      width: 520,
      marginBottom: 10,
      marginLeft: 455   
  },
  heading: {
      textAlign: "left"
  },
  buttons: {
      display: "block",
      width: .5,
      marginLeft: "auto",
      marginRight: 70
  }
}));

const App = () => {
  const classes = useStyles();

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
    <div className={classes.div} key={index}>
      <ListItem className={classes.listitems}>
       <h1 className={classes.heading}>{data.name}</h1>
       <div className={classes.buttons}>
         <button><a href={data.website}>Website</a></button>
         <button><a href={data.linkToGoogleMaps}>Directions</a></button>
         <button><a href={`tel:${data.phone}`}>Call</a></button>
        </div>
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
