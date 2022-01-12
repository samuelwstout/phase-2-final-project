import React from "react";

const Tooltip = ({ feature }) => {
  const { id } = feature.properties;

  return (
    <div id={`tooltip-${id}`}>
       <h3>{feature.properties.name}</h3>
       <button><a href={feature.properties.website}>Go to Site</a></button>
    </div>
  );
};

export default Tooltip;