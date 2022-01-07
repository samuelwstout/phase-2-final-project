import React, {useRef, useState, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Ftd3N0b3V0IiwiYSI6ImNreHRjcnlwdzd4N3Yyb211bnB3ajVjNzUifQ.lo9qYsVJl59ppjZWZELEMA';

export const Map = () => {   

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-87.623177);
    const [lat, setLat] = useState(41.881832);
    const [zoom, setZoom] = useState(10);

    useEffect(() => {

        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
    });

    useEffect(() => {
   
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
});
    return (
    <div>
        <div ref={mapContainer} className="map-container" />
    </div>
    ) 
}
export default Map;