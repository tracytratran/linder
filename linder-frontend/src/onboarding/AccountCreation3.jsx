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
    <div className="input-field">
      <h1 className="input-field__title">What are you looking for?</h1>
      <div className="radio-container">
        <label className="radio-label">
          <input
            type="radio"
            value="Idea"
            checked={selection === "Idea"}
            onChange={() => handleSelection("Idea")}
          />
          Idea
        </label>
        <label className="radio-label">
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
