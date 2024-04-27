import "../styles/App.css";
import Nav from "./Nav";
import Brain from "./Brain";
import OriginalBrainContainer from "./OriginalBrainContainer";
import NewBrainContainer from "./NewBrainContainer";
import { useContext, useEffect } from "react";
import brainContext from "../context/BrainContext";
import BrainForm from "./BrainForm";

const App = () => {
  const { originalBrains, newBrains, minValue, setOriginalBrains, characters } = useContext(brainContext);

  useEffect(() => {
    const output = Array(minValue);
    for (let i = 0; i < minValue; i++) {
      output[i] = characters[i];
    }
    setOriginalBrains(output);
  },[minValue])
  
  return (
    <>
      <Nav />
      <BrainForm />
      <h2 className="flex center">Brains: </h2>
      <OriginalBrainContainer>
        {originalBrains?.map((name, i) => (
          <Brain key={i} originalName={name} />
        ))}
      </OriginalBrainContainer>
      {newBrains && <NewBrainContainer>
        {
          newBrains.map((el, i) => (
            <Brain key={i} originalName={originalBrains[i]} changedName={originalBrains[el]} />
          ))}
      </NewBrainContainer>}
    </>
  );
};

export default App;
