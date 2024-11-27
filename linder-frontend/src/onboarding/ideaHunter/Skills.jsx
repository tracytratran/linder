import { useState } from "react";
import "../../styling/Skills.css";
import IconFilled from "../../components/IconFilled";

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
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">What are your best skills?</h1>
      <div className="flex flex-wrap items-center gap-2 w-full min-h-[40px] relative">
        <label className="w-full">
          Skills
          <input
            required
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type a skill"
            className="border-none outline-none text-sm flex-grow min-w-[80px] p-1"
          />
        </label>
        <div>
          {selectedSkills.map((skill, index) => (
            <div key={index} className="mb-2 rounded-md flex gap-1">
              <IconFilled name="diamond" className="text-xl text-sky-700" />
              <div className="pt-0.5">{skill}</div>
              <button
                className="bg-none border-none cursor-pointer text-gray-500 font-bold hover:text-gray-700"
                onClick={() => handleDeleteSkill(index)}
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

export default Skills;
