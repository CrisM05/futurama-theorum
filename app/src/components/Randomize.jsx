import { useContext } from "react";
import BrainContext from "../context/BrainContext";

const Randomize = () => {
  const { originalBrains, setNewBrains,newBrains} = useContext(BrainContext);
    const brainKeys = new Set(originalBrains.map((el,i) => i));
  const handleClick = async (e) => {
};

  return (
    <button className="flex center" onClick={handleClick}>
      Randomize
    </button>
  );
};

export default Randomize;
