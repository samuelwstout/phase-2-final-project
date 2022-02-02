import React from 'react';
import RestaurantCard from './RestaurantCard';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({

  items: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", 
  },

}));

const RestaurantList = ({restaurants, listOfSubmissions}) => {

  const classes = useStyles();


    const restaurantCards = restaurants.map((restaurant => 
      <div key={restaurant.id}>
      <RestaurantCard restaurant={restaurant} />
      </div>
    ))

    return (
        <div className={classes.listdiv}>
          <List className={classes.items} component="nav" aria-label="secondary mailbox folders">
             { restaurantCards }
           { listOfSubmissions }
          </List>
        </div>
  )
}

export default RestaurantList;

