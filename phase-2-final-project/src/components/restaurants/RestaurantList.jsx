import React, {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { finalURL } from './Globals';
import AddCard from './AddCard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const RestaurantList = ({ restaurants }) => {

    const [addList, setAddList] = useState()

    const classes = useStyles();

    const restaurantCards = restaurants.map((restaurant => 
      <div>
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      </div>
    ))
   
    
     
   const handleSubmit = (e, addObj) => {
     e.preventDefault();

     fetch((finalURL), {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(addObj),
    });

     setAddList([addObj, ...addList])
     console.log(addObj);
   }

    return (
        <div>
          <List component="nav" aria-label="secondary mailbox folders">
             { restaurantCards }
          </List>
         <AddCard handleSubmit={handleSubmit}/>
        </div>
  )
}

export default RestaurantList;
