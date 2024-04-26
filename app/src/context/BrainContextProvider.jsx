import BrainContext from "./BrainContext";
import { useState } from "react";
import characters from "../characters.json";

export const BrainContextProvider = ({ children }) => {
  const [originalBrains, setOriginalBrains] = useState([]);
  const [newBrains, setNewBrains] = useState(null);

  const values = {
    originalBrains,
    setOriginalBrains,
    characters,
    newBrains,
    setNewBrains,
  };
  return (
    <BrainContext.Provider value={values}>{children}</BrainContext.Provider>
  );
};

export default BrainContextProvider;
