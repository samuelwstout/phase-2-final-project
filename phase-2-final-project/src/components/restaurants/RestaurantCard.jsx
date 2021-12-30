import React from 'react';
import ListItem from '@material-ui/core/ListItem';


const RestaurantCard = ({ restaurant }) => {
    
    return (
        <div>
        <ListItem button>
       <h1>{restaurant.name}</h1>
       <h1>{restaurant.location}</h1>
       <h1>{restaurant.reviews}</h1>
        <button><a href="http://localhost:3000/map">MAP</a></button>
       <button><a href="http://localhost:3000/fav">FAV</a></button>
        </ListItem>
        </div>
    )
}

export default RestaurantCard
