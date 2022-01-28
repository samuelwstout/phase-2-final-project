import React, { useState, useEffect } from 'react';
import RestaurantList from './components/restaurants/RestaurantList';
import Home from './components/restaurants/Home';
import AddForm from './components/restaurants/AddForm';
import NavBar from './components/navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { finalURL } from './components/restaurants/Globals';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

//Styling
const useStyles = makeStyles(() => ({
  heading: {
    fontFamily: "Roboto, sans-serif",
  },
  popup: {
    textAlign: "left",
    marginLeft: "18px",
  },
  buttons: {
    display: "inline-block",
    padding: "0.35em 1.2em",
    border: "0.1em solid #FFFFFF",
    margin: "0 0.3em 0.3em 0",
    borderRadius: "0.12em",
    fontFamily: "Roboto, sans-serif",
    textDecoration: "none"
  },
  link: {
    color: "black",
    textDecoration: "none",
  }
}));



//App component
const App = () => {
  const classes = useStyles(); //Styling
  const [restaurants, setRestaurants] = useState([]); //State for db.json GET Request + displaying initial data
  
  //GET Request
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(finalURL);
      const data = await response.json();
      setRestaurants(data);
    }
    fetchRestaurants();
  }, []);
  
  //State that records user input on the form as they type
  const [addCardData, setAddCardData] = useState({
    name: '',
    city: '',
    phone: '',
    linkToGoogleMaps: '',
    website: '',
  });
  
  const [open, setOpen] = useState(false); //State that records restaurant list button click
  const [submittedData, setSubmittedData] = useState([]); //State that records user input result after form submission

  //Toggles result for restaurant list item click
  const handleListClick = () => {
    setOpen(!open)
  }

  //Grabs values from the input elements and updates those values to addCardData
  const handleChange = (e) => {
    setAddCardData({
      ...addCardData, [e.target.id]: e.target.value
    });
  }

  //POST Request for adding result to db.json
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch((finalURL), {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addCardData)
    })
      .then(r => r.json())
      .then(data => {
        const submittedArray = [...submittedData, data]; //submittedData acts initially as an empty object before form submission
        setSubmittedData(submittedArray); //Sets 'data' to submittedData
        setAddCardData({ name: '', city: '', phone: '', linkToGoogleMaps: '', website: '' }); //Reset form after submission
      })
  }

  
  //Renders each form submission ({listOfSubmissions}) along with 'restaurants' in RestaurantList.jsx
  const listOfSubmissions = submittedData.map((data, index) => {
    
    return (
      <div>
        <div className={classes.div} key={index}>
          <ListItem>
            <button onClick={handleListClick}><h1 className={classes.heading}>{data.name} | {data.city}</h1></button>
          </ListItem>
        </div>
        {open && (
          <div className={classes.popup}>
            <div className={classes.popup}>
              <button className={classes.buttons}><a className={classes.link} href={`tel:${data.phone}`}>Call</a></button>
              <button className={classes.buttons}><a className={classes.link} href={data.linkToGoogleMaps}>View on map</a></button>
              <button className={classes.buttons}><a className={classes.link} href={data.website}>Go to site</a></button>
            </div>
          </div>
        )}
      </div>
    )
  })


//Establishes Routing
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<RestaurantList key="list" restaurants={restaurants} listOfSubmissions={listOfSubmissions} />} />
          <Route path='/add' element={
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
