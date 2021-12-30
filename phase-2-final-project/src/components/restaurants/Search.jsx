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

const Search = ({ restaurants }) => {
    const classes = useStyles();
    const restaurantCards = restaurants.map((restaurant => <RestaurantCard key= { restaurant.id } restaurant = {restaurant} /> ))
    return (
        <div>
          <List component="nav" aria-label="secondary mailbox folders">
             { restaurantCards }
          </List>
        </div>
  )
}

export default Search
