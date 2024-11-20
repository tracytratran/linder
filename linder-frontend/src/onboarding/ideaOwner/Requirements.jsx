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
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">Who do you search for?</h1>
      <div className="flex flex-wrap items-center gap-2.5 w-full min-h-[40px] relative">
        <label className="w-full">
          Position
          <input type="text" placeholder="React Developer" />
        </label>
        <label className="w-full">
          Requirements
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="What skills do they need?"
            className="border-none outline-none text-sm flex-grow min-w-[80px] p-1"
          />
        </label>
        <div>
          {selectedRequirements.map((requirement, index) => (
            <div key={index} className="mb-2 px-2 py-1 rounded-md flex gap-1 text-sm">
              <span
                style={{ fontSize: "20px" }}
                className="material-symbols-outlined"
              >
                diamond
              </span>
              {requirement}
              <button
                className="bg-none border-none cursor-pointer text-gray-500 font-bold hover:text-gray-700"
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
