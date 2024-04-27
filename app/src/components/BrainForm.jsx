import { useContext, useState } from "react";
import brainContext from "../context/BrainContext";

const BrainForm = () => {
    const {characters,setMinValue} = useContext(brainContext);

  return (
    <div className="flex center form-container">
        <label htmlFor="brain-form-num">Number of brains:</label>
        <select name="num" id="brain-form-num" onChange={(e) => setMinValue(+e.target.value)}>
            {characters.map((el,i) => {
                if (i < characters.length-3) {
                    return <option key={i} value={i + 2}>{i+2}</option>
                }
            })}
        </select>
    </div>
  );
};

export default BrainForm;
