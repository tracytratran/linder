import "../styling/DotsMobileStepper.css";

function DotsMobileStepper({ steps, activeStep, onNext }) {
  return (
    <div className="stepper-container">
      {/* Dots displaying active state */}
      <div className="dots-container">
        {Array.from({ length: steps }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeStep ? "active-dot" : ""}`}
          ></span>
        ))}
      </div>

      {/* Continue Button triggers onNext from props */}
      <button className="continue-button" onClick={onNext}>
        {activeStep === steps - 1 ? "Complete" : "Next"}
      </button>
    </div>
  );
}

export default DotsMobileStepper;
