import {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({

heading: {
    fontFamily: "Courier, monospace",
},
popup: {
    marginLeft: ""
}

}));

const RestaurantCard = ({ restaurant }) => {

    const [open, setOpen] = useState(false);
  
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
                <p>Hi</p>
            </div>
        )}
    </div>
    )
}



export default RestaurantCard;
