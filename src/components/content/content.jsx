import "./content.css";

const SymContent = ({ selectedItem }) => {
  return (
    <div className="sym-content">
      <div className="sym-content-wrapper">{selectedItem}</div>
    </div>
  );
};

export default SymContent;
