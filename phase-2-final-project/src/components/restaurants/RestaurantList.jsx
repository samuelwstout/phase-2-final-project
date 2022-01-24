import React from 'react';
import RestaurantCard from './RestaurantCard';
import List from '@material-ui/core/List';
 
const RestaurantList = ({restaurants, listOfSubmissions}) => {

    const restaurantCards = restaurants.map((restaurant => 
      <div>
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      </div>
    ))

    return (
        <div>
          <List  key="restaurantCards" component="nav" aria-label="secondary mailbox folders">
             { restaurantCards }
           { listOfSubmissions }
          </List>
        </div>
  )
}

export default RestaurantList;

