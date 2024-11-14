import { useState } from "react";
import "../../styling/Skills.css";

function Idea() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = (tag) => {
    setSelectedTags((prevTags) => [...prevTags, tag]);
    setInputValue(""); // Clear input after adding
  };

  const handleDeleteTag = (index) => {
    setSelectedTags((prevTags) => prevTags.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
        handleAddTag(inputValue.trim());
      e.preventDefault(); // Prevent form submission
    }
  };

  return (
    <div className="input-field">
      <h1 className="input-field__title">What is your idea?</h1>
      <div className="input-field__container">
        <label className="input-field__form__label">
          Brief Idea
          <input type="text" placeholder="Describe your idea briefly" />
        </label>
        <label className="input-field__label">
          Expanded Idea
          <textarea
            placeholder="Tell others more about your idea (e.g how it was created, what it is about, etc.)"
            style={{ width: "100%", height: "200px", resize: "none" }}
          ></textarea>
        </label>
        <label className="input-field__label">
          Tags
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Write a tag that describes your idea"
            className="input-field__container__input"
          />
        </label>
        {selectedTags.map((tag, index) => (
          <div key={index} className="chip">
            #{tag}
            <button
              className="chip__delete-button"
              onClick={() => handleDeleteTag(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Idea;
