import { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    heading: {
        fontFamily: "Roboto, sans-serif",
        width: "fit-content",
        display: "inline-block",
    },
    popup: {
        textAlign: "left",
        marginLeft: "18px",
    },
    buttons: {
        display: "inline-block",
        padding: "0.35em 1.2em",
        border: "0.1em solid #FFFFFF",
        margin: "0 0.3em 0.3em 0",
        borderRadius: "0.12em",
        fontFamily: "Roboto, sans-serif",
        textDecoration: "none"
    },
    link: {
        color: "black",
        textDecoration: "none",
    }

}));


const RestaurantCard = ({ restaurant }) => {

    const [open, setOpen] = useState(false); //for popup on handleListClick

    const classes = useStyles();

    const handleListClick = () => {
    setOpen(!open)
    }

    return (
        <div className={classes.outerdiv}>
            <div className={classes.div}>
                <ListItem >
                    <button onClick={handleListClick}><h1 className={classes.heading}>{restaurant.name} | {restaurant.city}</h1></button>
                </ListItem>
            </div>
            {open && (
                <div className={classes.popup}>
                    <button className={classes.buttons}><a className={classes.link} href={`tel:${restaurant.phone}`}>Call</a></button>
                    <button className={classes.buttons}><a className={classes.link} href={restaurant.linkToGoogleMaps}>View on map</a></button>
                    <button className={classes.buttons}><a className={classes.link} href={restaurant.website}>Go to site</a></button>
                </div>
            )}
        </div>
    )
}

export default RestaurantCard;
