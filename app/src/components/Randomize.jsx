import { useContext } from "react";
import BrainContext from "../context/BrainContext";

const Randomize = () => {
  const {
    originalBrains,
    setNewBrains,
    setSwapTracker,
    characters,
    setHelpers,
  } = useContext(BrainContext);

  const handleClick = async (e) => {
    let brainKeys = new Set(originalBrains.map((el, i) => i));
    const output = Array(originalBrains.length);
    const tracker = new Map();

    for (let i = 0; i < output.length; i++) {
      let count = 0;
      let keysLeft = Array.from(brainKeys.values());
      let randomIndex;
      let broke = false;

      do {
        randomIndex = Math.floor(Math.random() * keysLeft.length);
        count++;
        if (count > originalBrains.length + 10) {
          broke = true;
          break;
        }
      } while (keysLeft[randomIndex] === i);

      if (broke) {
        i = -1;
        brainKeys = new Set(originalBrains.map((el, i) => i));
        output.fill(null);
        tracker.clear();
        continue;
      }

      brainKeys.delete(keysLeft[randomIndex]);
      output[i] = keysLeft[randomIndex];
      // The one swapped into is keysLeft[randomIndex]
      tracker.set(originalBrains[i], originalBrains[keysLeft[randomIndex]]);
    }
    setNewBrains(output);
    setSwapTracker(tracker);

    const originalBrainsSet = new Set(originalBrains);

    let helper1;
    let helper2;

    // If we have all but 2 characters, the helpers are them
    // else we find a random character from the ones remaining
    // and set the helpers to that character and the one after
    if (originalBrains.length === characters.length) {
      helper1 = characters[characters.length-2];
      helper2 = characters[characters.length-1];
    } else {
      const randomNum = Math.floor(
        Math.random() * (characters.length - 1 - originalBrains.length) +
          originalBrains.length
      );
      helper1 = characters[randomNum];
      helper2 = characters[randomNum + 1];
    }

    if (originalBrainsSet.has(helper1)) {
      console.warn(`YO WE GOT ${helper1} ALREADY`);
      return;
    }

    if (originalBrainsSet.has(helper2)) {
      console.warn(`YO WE GOT ${helper2} ALREADY`);
      return;
    }

    setHelpers({ helper1, helper2 });
  };

  return (
    <button className="flex center" onClick={handleClick}>
      Randomize
    </button>
  );
};

export default Randomize;
