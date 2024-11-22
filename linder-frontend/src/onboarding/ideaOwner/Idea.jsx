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
    <div style={{ height: "calc(100vh - 142px)" }} className="p-5 overflow-scroll">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">
        What is your idea?
      </h1>
      <div className="flex flex-wrap items-center gap-2.5 w-full min-h-[40px] relative">
        <label className="w-full">
          Brief Idea
          <textarea required type="text" placeholder="Describe your idea briefly in 3 lines" maxLength={160} style={{height: '150px'}}  />
        </label>
        <label className="w-full">
          Expanded Idea
          <textarea
            required
            maxLength={400}
            placeholder="Tell others more about your idea (e.g how it was created, what it is about, etc.)"
            style={{ width: "100%", height: "320px", resize: "none" }}
          ></textarea>
        </label>
        <label className="w-full">
          Tags
          <input
            required
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Write a tag that describes your idea"
            className="border-none outline-none text-sm flex-grow min-w-[80px] p-1"
          />
        </label>
        {selectedTags.map((tag, index) => (
          <div key={index} className="bg-gray-200 px-2 py-1 pl-4 rounded-md flex items-center gap-1 text-sm capitalize text-sky-700 italic text-wrap">
            #{tag}
            <button
              className="bg-none border-none cursor-pointer text-gray-500 font-bold hover:text-gray-700"
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
