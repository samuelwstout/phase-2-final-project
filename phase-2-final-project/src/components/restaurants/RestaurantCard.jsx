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
        marginLeft: 465   
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
        <button href={restaurant.website}>Website</button>
        <button href={restaurant.linkToGoogleMaps}>Directions</button>
        <button href={`tel:${restaurant.phone}`}>Call</button>
       </div>
        </ListItem>
        </div>
    )
}



export default RestaurantCard;
