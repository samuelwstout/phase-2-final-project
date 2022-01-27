import React from 'react';
import RestaurantCard from './RestaurantCard';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

  listdiv: {
    columnCount: 2,
  },
  items: {
    display: "inline" 
  }
  

}));

const RestaurantList = ({restaurants, listOfSubmissions}) => {

  const classes = useStyles();


    const restaurantCards = restaurants.map((restaurant => 
      <div>
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      </div>
    ))

    return (
        <div key="list" className={classes.listdiv}>
          <List className={classes.items} key="restaurantCards" component="nav" aria-label="secondary mailbox folders">
             { restaurantCards }
           { listOfSubmissions }
          </List>
        </div>
  )
}

export default RestaurantList;

