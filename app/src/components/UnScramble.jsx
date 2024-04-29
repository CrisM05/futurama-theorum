import { useContext } from "react";
import brainContext from "../context/BrainContext";

const UnScramble = () => {
  const { swapTracker, helpers, originalBrains,setMoves } = useContext(brainContext);

  const handleClick = (e) => {
    const allCircles = [];
    /*
    Start at first person
    Make circles of people
        A circle is defined as a 'loop' of people
        Who's body's pointer
        is the body behind that person
        until the last body points to the first in circle
    There can be more than one
    Have the first of the two helpers swap with the person in front of circle one
    Have person two swap with everyone in the circle back to front
    First swaps with person in the back of the circle
    Do for all circles
    At end, swap one and two if they should be the other
     */
    let circle = [originalBrains[0]];
    let count = 0;

    while (count < 100 && swapTracker.size > 0) {
      const top = circle[circle.length - 1];
      const swapped = swapTracker.get(top);

      circle.push(swapped);
      swapTracker.delete(top);

      if (swapped === circle[0]) {
        allCircles.push(circle);
        const valuesLeft = [];
        swapTracker.forEach((el) => valuesLeft.push(el));
        const randomCharacter =
          valuesLeft[Math.floor(Math.random() * valuesLeft.length)];
        circle = [swapTracker.get(randomCharacter)];
      }

      count++;
    }
    let { helper1, helper2 } = helpers;
    const originalHelper1 = helper1;
    const originalHelper2 = helper2;

    const moves = [];

    allCircles.forEach((circle) => {
      //Have the first of the two helpers swap with the person in front of circle one
      moves.push({original : originalHelper1, newBody: circle[0]});
      let temp1 = helper1;
      helper1 = circle[0];
      circle[0] = temp1;

      //Have person two swap with everyone in the circle back to front
      const backIndex = circle.length - 1;
      for (let i = backIndex; i >= 0; i--) {
        moves.push({original: originalHelper2, newBody: circle[i]});
        const temp2 = helper2;
        helper2 = circle[i];
        circle[i] = temp2;
      }

      //First swaps with person in the back of the circle
      moves.push({ original: originalHelper1, newBody: circle[backIndex] });
      temp1 = helper1;
      helper1 = circle[backIndex];
      circle[backIndex] = temp1;
    });
    if (helper1 !== originalHelper1) {
      moves.push({ original: originalHelper1, newBody: originalHelper2 });

      const temp1 = helper1;
      helper1 = helper2;
      helper2 = temp1;
    }
    setMoves(moves);
    moves.forEach(el => console.log(el))
  };

  return (
    <button onClick={handleClick} className="flex center">
      Unscramble
    </button>
  );
};

export default UnScramble;
