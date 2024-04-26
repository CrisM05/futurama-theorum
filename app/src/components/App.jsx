import "../styles/App.css";
import Nav from "./Nav";
import Brain from "./Brain";
import OriginalBrainContainer from "./OriginalBrainContainer";
import { useContext, useEffect } from "react";
import brainContext from "../context/BrainContext";

const App = () => {
  const tempBrains = ["Allan", "Arron", "Nico", "Maya", "Dom",];
  const {setOriginalBrains} = useContext(brainContext);
  useEffect(() => {
    setOriginalBrains(tempBrains);
  },[])
  return (
    <>
      <Nav />
      <OriginalBrainContainer>
        {tempBrains.map((name,i) => (
          <Brain key={i} originalName={name} />
        ))}
      </OriginalBrainContainer>
    </>
  );
};

export default App;
