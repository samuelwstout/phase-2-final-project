import React, {useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '../Tooltip';
import ReactDOM from 'react-dom';

//Material UI styling 
const useStyles = makeStyles({
   mapStyling: {
    marginTop: 120,
    marginLeft: 100,
    marginRight: 100,
   },
   heading: {
    marginTop: 90,
   }, 
   textAboveMap: {
    textAlign: "center",
   }
  });

//Mapbox token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2Ftd3N0b3V0IiwiYSI6ImNreHRjcnlwdzd4N3Yyb211bnB3ajVjNzUifQ.lo9qYsVJl59ppjZWZELEMA';


const Home = () => {   
    //material UI styling
    const classes = useStyles();
    //mapbox
    const mapContainerRef = useRef(null);
    const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
    const map = useRef(null);
    //coordinates
    const [lng, setLng] = useState(-87.623177);
    const [lat, setLat] = useState(41.881832);
    const [zoom, setZoom] = useState(10);
    
// Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/samwstout/ckyai3aaq3ezs15olccds13oj',
      center: [lng, lat],
      zoom: zoom
    });
    
     // change cursor to pointer when user hovers over a clickable feature
     map.on('mouseenter', e => {
        if (e.features.length) {
          map.getCanvas().style.cursor = 'pointer';
        }
      });

        // reset cursor to default when user is no longer hovering over a clickable feature
    map.on('mouseleave', () => {
        map.getCanvas().style.cursor = '';
      });


       // add tooltip when users mouse move over a point
    map.on('click', e => {
        const features = map.queryRenderedFeatures(e.point, {
            layers: ['deep_dish']
        });
        if (features.length) {
          const feature = features[0];


        // Create tooltip node
            const tooltipNode = document.createElement('div');
            ReactDOM.render(<Tooltip feature={feature} />, tooltipNode);

        // Set tooltip on map
        tooltipRef.current
          .setLngLat(e.lngLat)
          .setDOMContent(tooltipNode)
          .addTo(map);
        }

});

 // Clean up on unmount
 return () => map.remove();
}, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    return (
    <div>
        <div className={classes.textAboveMap}>
        <h1 className={classes.heading}>Find Chicago Deep Dish</h1>
        </div>
        <div className={classes.mapStyling}>
            <div ref={mapContainerRef} className="map-container" />
        </div>
    </div>
    ) 
}
export default Home;