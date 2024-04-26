import Randomize from "./Randomize";

const OriginalBrainContainer = ({ children }) => {
  return (
    <>
      <div className="flex center brains-container">
        <div className="brains grid">{children}</div>
        <Randomize />
      </div>
    </>
  );
};

export default OriginalBrainContainer;
