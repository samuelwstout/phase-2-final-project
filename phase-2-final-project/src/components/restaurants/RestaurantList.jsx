import React, {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { finalURL } from './Globals';


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

   const handleAddToList = (e, addObj) => {
     e.preventDefault();
     setAddList([addObj, ...addList])
     fetch((finalURL), {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(addObj),
    });
   }
    return (
        <div>
          <List key="restaurantCards" component="nav" aria-label="secondary mailbox folders">
             { restaurantCards }
          </List>
          <List key="addedRestaurants" component="nav" aria-label="secondary mailbox folders" handleAddToList={handleAddToList}></List>
         
        </div>
  )
}

export default RestaurantList;

