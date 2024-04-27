import { useContext } from "react";
import brainContext from "../context/BrainContext";
import UnScramble from "./UnScramble";

const NewBrainContainer = ({ children }) => {
  const { swapTracker, helpers } = useContext(brainContext);
  return (
    <div className="flex center brains-container column">
      <div className="flex center column">
        <h2 className="flex center">The 2 people we need</h2>
        <ul className="flex center column brain helper">
            <li> {helpers.helper1 || ''}</li>
            <li> {helpers.helper2 || ''}</li>
        </ul>
      </div>
      <h2 className="flex center row"><p className="original-brain">Original </p> <p>{ ' -> '}</p> <p className="swapped-brain">New Body</p></h2>
      <div className="brains grid">{children}</div>
      {swapTracker && <UnScramble />}
    </div>
  );
};

export default NewBrainContainer;
