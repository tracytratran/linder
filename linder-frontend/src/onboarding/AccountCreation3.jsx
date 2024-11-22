import { useState } from "react";

function AccountCreation3({ onSelectUserType}) {
  // State to track selected option
  const [selection, setSelection] = useState("");

  // Function to handle selection change
  const handleSelection = (value) => {
    setSelection(value);
    onSelectUserType(value); // Pass selected user type to parent component
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">What are you looking for?</h1>
      <div className="flex flex-col items-start gap-2 w-full">
        <label className="w-full p-3 text-base text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300 ease-in-out">
          <input
            type="radio"
            value="Idea"
            checked={selection === "Idea"}
            onChange={() => handleSelection("Idea")}
          />
          Idea
        </label>
        <label className="w-full p-3 text-base text-gray-600 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition duration-300 ease-in-out">
          <input
            type="radio"
            value="Collaborator"
            checked={selection === "Collaborator"}
            onChange={() => handleSelection("Collaborator")}
          />
          Collaborator
        </label>
      </div>
      {/* <button type="submit">Next</button> */}
    </div>
  );
}

export default AccountCreation3;
