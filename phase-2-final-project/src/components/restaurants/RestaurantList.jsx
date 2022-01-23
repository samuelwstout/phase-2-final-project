import React from 'react';
import RestaurantCard from './RestaurantCard';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
 


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const RestaurantList = ({restaurants, listOfSubmissions}) => {

    const classes = useStyles();

    const restaurantCards = restaurants.map((restaurant => 
      <div>
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      </div>
    ))

   
    return (
        <div>
          <List key="restaurantCards" component="nav" aria-label="secondary mailbox folders">
             { restaurantCards }
           { listOfSubmissions }
          </List>
        </div>
  )
}

export default RestaurantList;

