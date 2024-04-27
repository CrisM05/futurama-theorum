import BrainContext from "./BrainContext";
import { useState } from "react";
import characters from "../characters.json";

export const BrainContextProvider = ({ children }) => {
  const [originalBrains, setOriginalBrains] = useState(null);
  const [newBrains, setNewBrains] = useState(null);
  const [minValue, setMinValue] = useState(2);
  const [swapTracker, setSwapTracker] = useState();
  const [helpers, setHelpers] = useState({});

  const values = {
    originalBrains,
    setOriginalBrains,
    characters,
    newBrains,
    setNewBrains,
    minValue,
    setMinValue,
    swapTracker,
    setSwapTracker,
    helpers,
    setHelpers
  };
  return (
    <BrainContext.Provider value={values}>{children}</BrainContext.Provider>
  );
};

export default BrainContextProvider;
