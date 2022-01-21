import React from 'react';
import ListItem from '@material-ui/core/ListItem';

const RestaurantCard = ({ restaurant }) => {
  
    return (
        <div>
        <ListItem>
       <h1>{restaurant.name}</h1>
       <ul>
           <li><a href={`tel:${restaurant.phone}`}>Call</a></li>
           <li><a href={restaurant.website}>Website</a></li>
           <li><a href={restaurant.linkToGoogleMaps}>Link to Google Maps</a></li>
       </ul>
        </ListItem>
        </div>
    )
}

export default RestaurantCard;
