import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

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
 },
 popup: {
   width: "400px"
 }

}));


const Tooltip = ({ feature }) => {

  const classes = useStyles();

  const { id } = feature.properties;

  return (
    <div className={classes.popup} id={`tooltip-${id}`}>
       <h3>{feature.properties.name}</h3>
       <button className={classes.buttons}><a className={classes.link} href={`tel:${feature.properties.phone}`}>Call</a></button>
       <button className={classes.buttons}><a className={classes.link} href={feature.properties.linkToGoogleMaps}>View on map</a></button>
       <button className={classes.buttons}><a className={classes.link} href={feature.properties.website}>Go on site</a></button>
    </div>
  );
};

export default Tooltip;
