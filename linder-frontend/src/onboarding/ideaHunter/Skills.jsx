import { useState } from "react";
import "../../styling/Skills.css";

function Skills() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddSkill = (skill) => {
    setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    setInputValue(""); // Clear input after adding
  };

  const handleDeleteSkill = (index) => {
    setSelectedSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      handleAddSkill(inputValue.trim());
      e.preventDefault(); // Prevent form submission
    }
  };

  return (
    <div className="input-field">
      <h1 className="input-field__title">What are your best skills?</h1>
      <div className="input-field__container">
        <label className="input-field__label">
          Skills
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a skill"
            className="input-field__container__input"
          />
        </label>
        {selectedSkills.map((skill, index) => (
          <div key={index} className="chip">
            {skill}
            <button
              className="chip__delete-button"
              onClick={() => handleDeleteSkill(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
