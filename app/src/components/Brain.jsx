import React from "react";

const Brain = ({ originalName, changedName }) => {
  return (
    <div className=" center">
      <ul className="brain flex center column">
        <li>{originalName}</li>
        {changedName && (
          <>
          <li>|</li>
          <li>v</li>
            <li className="swapped-brain">{changedName}</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Brain;
