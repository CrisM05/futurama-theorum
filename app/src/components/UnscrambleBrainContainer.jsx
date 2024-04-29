const UnscrambleBrainContainer = ({ children }) => {
  return (
    <div className="flex center brains-container grid">
      <div className="flex center grid brains">{children}</div>
    </div>
  );
};

export default UnscrambleBrainContainer;
