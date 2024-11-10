import { useState } from "react";
import "../../styling/Skills.css";

function Interests() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddInterests = (interest) => {
    setSelectedInterests((prevInterests) => [...prevInterests, interest]);
    setInputValue(""); // Clear input after adding
  };

  const handleDeleteInterest = (index) => {
    setSelectedInterests((prevInterests) =>
      prevInterests.filter((_, i) => i !== index)
    );
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleAddInterests(inputValue.trim());
      e.preventDefault(); // Prevent form submission
    }
  };

  return (
    <div className="input-field">
      <h1 className="input-field__title">What are your areas of interest?</h1>
      <div className="input-field__container">
        <label className="input-field__label">
          Area of interest
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type an area of interest"
            className="input-field__container__input"
          />
        </label>
        {selectedInterests.map((interest, index) => (
          <div key={index} className="chip">
            #{interest}
            <button
              className="chip__delete-button"
              onClick={() => handleDeleteInterest(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interests;
