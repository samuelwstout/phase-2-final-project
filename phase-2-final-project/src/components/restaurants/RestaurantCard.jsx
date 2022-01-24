import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    listitems: {
        border: "1px solid",
        marginBottom: 30

    },
    div: {
        display: "block",
        width: 520,
        marginBottom: 10,
        marginLeft: 455   
    },
    heading: {
        textAlign: "left"
    },
    buttons: {
        display: "block",
        width: .5,
        marginLeft: "auto",
        marginRight: 70
    }
}));

const RestaurantCard = ({ restaurant }) => {
  
    const classes = useStyles();

    return (
        <div className={classes.div}> 
        <ListItem className={classes.listitems} >
       <h1 className={classes.heading}>{restaurant.name}</h1>

       <div className={classes.buttons}>
        <button><a href={restaurant.website}>Website</a></button>
        <button><a href={restaurant.linkToGoogleMaps}>Directions</a></button>
        <button><a href={`tel:${restaurant.phone}`}>Call</a></button>
       </div>
        </ListItem>
        </div>
    )
}



export default RestaurantCard;
