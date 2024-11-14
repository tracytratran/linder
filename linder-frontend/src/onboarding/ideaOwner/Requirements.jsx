import { useState } from "react";
import "../../styling/Skills.css";

function Requirements() {
  const [selectedRequirements, setSelectedRequirements] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddRequirement = (requirement) => {
    setSelectedRequirements((prevRequirements) => [...prevRequirements, requirement]);
    setInputValue(""); // Clear input after adding
  };

  const handleDeleteRequirements = (index) => {
    setSelectedRequirements((prevRequirements) => prevRequirements.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
        handleAddRequirement(inputValue.trim());
      e.preventDefault(); // Prevent form submission
    }
  };

  return (
    <div className="input-field">
      <h1 className="input-field__title">Who do you search for?</h1>
      <div className="input-field__container">
        <label className="input-field__form__label">
          Position
          <input type="text" placeholder="React Developer" />
        </label>
        <label className="input-field__label">
          Requirements
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="What skills do they need?"
            className="input-field__container__input"
          />
        </label>
        <div>
          {selectedRequirements.map((requirement, index) => (
            <div key={index} className="chip-list">
              <span
                style={{ fontSize: "20px" }}
                className="material-symbols-outlined"
              >
                diamond
              </span>
              {requirement}
              <button
                className="chip__delete-button"
                onClick={() => handleDeleteRequirements(index)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Requirements;
