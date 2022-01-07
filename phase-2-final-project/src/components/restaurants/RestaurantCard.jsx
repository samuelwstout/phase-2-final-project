import React from 'react';
import ListItem from '@material-ui/core/ListItem';

const RestaurantCard = ({ restaurant }) => {
  
    return (
        <div>
        <ListItem button>
       <h1>{restaurant.name}</h1>
        </ListItem> 
        </div>
    )
}

export default RestaurantCard;
