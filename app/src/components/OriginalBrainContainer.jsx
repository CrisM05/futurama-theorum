import { useContext } from "react";
import Randomize from "./Randomize";
import brainContext from "../context/BrainContext";

const OriginalBrainContainer = ({ children }) => {
  const {originalBrains} = useContext(brainContext);
  return (
    <>
      <div className="flex center brains-container column">
        <div className="brains grid">{children}</div>
        {originalBrains && <Randomize />}
      </div>
    </>
  );
};

export default OriginalBrainContainer;
