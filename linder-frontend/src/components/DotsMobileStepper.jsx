import "../styling/DotsMobileStepper.css";

function DotsMobileStepper({ steps, activeStep, onNext }) {
  return (
    <div className="flex flex-col items-center fixed bottom-[100px] w-full">
      {/* Dots displaying active state */}
      <div className="flex gap-2 mb-3">
        {Array.from({ length: steps }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 bg-gray-300 rounded-full p-[1px] transition-colors duration-300 ${index === activeStep ? "w-2 h-2 bg-[#24a6da] rounded-full p-[1px] transition-colors duration-300" : ""}`}
          ></span>
        ))}
      </div>

      {/* Continue Button triggers onNext from props */}
      <button className="w-full max-w-[400px] py-2.5 text-base text-white bg-[#3f51b5] border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#303f9f]" onClick={onNext}>
        {activeStep === steps - 1 ? "Complete" : "Next"}
      </button>
    </div>
  );
}

export default DotsMobileStepper;
