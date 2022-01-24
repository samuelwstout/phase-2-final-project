import React from "react";

const Tooltip = ({ feature }) => {
  const { id } = feature.properties;

  return (
    <div id={`tooltip-${id}`}>
       <h3>{feature.properties.name}</h3>
       <button><a href={feature.properties.website}>Website</a></button>
       <button><a href={feature.properties.linktoGoogleMaps}>Directions</a></button>
       <button><a href={`tel:${feature.properties.phone}`}>Call</a></button>
    </div>
  );
};

export default Tooltip;
