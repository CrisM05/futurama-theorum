import "../styles/App.css";
import Nav from "./Nav";
import Brain from "./Brain";
import OriginalBrainContainer from "./OriginalBrainContainer";
import NewBrainContainer from "./NewBrainContainer";
import { useContext, useEffect } from "react";
import brainContext from "../context/BrainContext";

const App = () => {
  const tempBrains = ["Allan", "Arron", "Nico", "Maya", "Dom"];
  const { originalBrains, setOriginalBrains, newBrains } =
    useContext(brainContext);
  useEffect(() => {
    setOriginalBrains(tempBrains);
  }, []);
  return (
    <>
      <Nav />
      <OriginalBrainContainer>
        {tempBrains.map((name, i) => (
          <Brain key={i} originalName={name} />
        ))}
      </OriginalBrainContainer>
      <NewBrainContainer>
        {newBrains &&
          newBrains.map((el, i) => (
            <Brain key={i} originalName={originalBrains[i]} changedName={originalBrains[el]} />
          ))}
      </NewBrainContainer>
    </>
  );
};

export default App;
