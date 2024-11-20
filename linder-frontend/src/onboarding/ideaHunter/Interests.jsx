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
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">What are your areas of interest?</h1>
      <div className="flex flex-wrap items-center gap-2 w-full min-h-[40px] relative">
        <label className="w-full">
          Area of interest
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type an area of interest"
            className="border-none outline-none text-sm flex-grow min-w-[80px] p-1"
          />
        </label>
        {selectedInterests.map((interest, index) => (
          <div key={index} className="bg-gray-200 px-2 py-1 pl-4 rounded-md flex items-center gap-1 text-sm capitalize">
            #{interest}
            <button
              className="bg-none border-none cursor-pointer text-gray-500 font-bold hover:text-gray-700"
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
