import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DotsMobileStepper from "../components/DotsMobileStepper";
import AccountCreation1 from "../onboarding/AccountCreation1";
import AccountCreation2 from "../onboarding/AccountCreation2";
import AccountCreation3 from "../onboarding/AccountCreation3";
import AllSet from "../onboarding/AllSet";
import Bio from "../onboarding/Bio";
import Experience from "../onboarding/ideaHunter/Experience";
import Interests from "../onboarding/ideaHunter/Interests";
import Skills from "../onboarding/ideaHunter/Skills";
import Idea from "../onboarding/ideaOwner/Idea";
import Requirements from "../onboarding/ideaOwner/Requirements";
import Location from "../onboarding/Location";
import PreviousJob from "../onboarding/PreviousJob";
import "../styling/SignUp.css";

function SignUp() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState(""); // Track if user is IdeaOwner or IdeaHunter
  const navigate = useNavigate(); // Initialize navigation

  const nextStep = () => {
    if (step < totalSteps) {
      setStep((prev) => prev + 1);
    } else if (step === totalSteps) {
      // Redirect to Feed when the last step is completed
      navigate("/feed");
    }
  };

  // Define total steps based on user type
  const totalSteps = userType === "Collaborator" ? 9 : 10; // Excluding AccountCreation1-3 and AllSet

  // Page components with conditional DotsMobileStepper rendering
  const getCurrentPage = () => {
    if (step === 1) return <AccountCreation1 />;
    if (step === 2) return <AccountCreation2 />;
    if (step === 3)
      return (
        <AccountCreation3
          onSelectUserType={(type) => setUserType(type)} // Capture userType from AccountCreation3
        />
      );
    if (step === 4) return <Location />;
    if (step === 5) return <PreviousJob />;
    if (step === 6) return <Bio />;

    // Show pages specific to Idea Hunter
    if (userType === "Idea") {
      if (step === 7) return <Experience />;
      if (step === 8) return <Interests />;
      if (step === 9) return <Skills />;
    }
    // Show pages specific to Idea Owner
    if (userType === "Collaborator") {
      if (step === 7) return <Idea />;
      if (step === 8) return <Requirements />;
    }

    return <AllSet />;
  };

  return (
    <div className="flex flex-col justify-between">
      {/* <Logo /> */}
      {getCurrentPage()}

      {/* Display 'Next' button for first three steps */}
      {step < 4 && (
        <div className="flex flex-col items-center fixed w-full bottom-[30px]">
          <button
            className="w-full max-w-[400px] py-2.5 text-base text-white bg-sky-700 border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#303f9f]"
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      )}

      {step >= 4 && userType && (
        <DotsMobileStepper
          steps={totalSteps - 3}
          activeStep={step - 4} // Adjust activeStep based on first step with DotsMobileStepper
          onNext={nextStep}
        />
      )}
    </div>
  );
}

export default SignUp;
