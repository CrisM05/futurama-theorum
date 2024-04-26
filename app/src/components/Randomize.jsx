import { useContext } from "react";
import BrainContext from "../context/BrainContext";

const Randomize = () => {
  const { originalBrains, setNewBrains, newBrains } = useContext(BrainContext);
  const handleClick = async (e) => {
    let brainKeys = new Set(originalBrains.map((el, i) => i));
    const output = Array(originalBrains.length);

    for (let i = 0; i < output.length; i++) {
      let count = 0;
      let keysLeft = Array.from(brainKeys.values());
      let randomIndex;
      let broke = false;

      do {
        randomIndex = Math.floor(Math.random() * keysLeft.length);
        count++;
        if (count > originalBrains.length +10) {
          broke = true;
          break;
        }
      } while (keysLeft[randomIndex] === i);

      if (broke)  {
        i = -1;
        brainKeys = new Set(originalBrains.map((el, i) => i));
        output.fill(null);
        continue;
      };

      brainKeys.delete(keysLeft[randomIndex]);
      output[i] = keysLeft[randomIndex];
    };
    setNewBrains(output);
  };

  return (
    <button className="flex center" onClick={handleClick}>
      Randomize
    </button>
  );
};

export default Randomize;
