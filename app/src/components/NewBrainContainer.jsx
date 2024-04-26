
const NewBrainContainer = ({children}) => {
    return (
        <div className="flex center brains-container column">
            <div className="brains grid">
                {children}
            </div>
        </div>
    );
}

export default NewBrainContainer;
