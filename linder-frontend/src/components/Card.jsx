import { useState } from "react";
import IconFilled from "./IconFilled";
import "../styling/Card.css";

function Card({ profile, handleDislike }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flex flex-col"
      style={{ height: "calc(100vh - 142px)" }}
      onClick={handleFlip}
    >
      <div
        className={`flip-card-inner relative w-full h-full shadow-md sm:my-4 ${
          isFlipped ? "rotate-y-180" : ""
        } grow border border-sky-100 rounded-lg`}
        style={{ transition: "transform 0.6s", transformStyle: "preserve-3d" }}
      >
        <FlipCardFront profile={profile} handleDislike={handleDislike} />
        <FlipCardBack profile={profile} handleDislike={handleDislike} />
      </div>
    </div>
  );
}

function FlipCardFront({ profile, handleDislike }) {
  return (
    <div className="flip-card-front absolute h-full flex flex-col px-4 py-2">
      <IconFilled name="autorenew" className="flex justify-end" />
      <div className="grow">
        <div className="flex flex-row justify-around py-2">
          <img
            src={profile.profileImage}
            alt={`Avatar of ${profile.name}`}
            className="size-28 rounded-full border-2"
          />
          <div className="flex flex-col py-2">
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <span className="text-lg">{profile.position}</span>
            <span className="text-lg">@ {profile.company}</span>
            <span className="text-lg">{profile.location}</span>
          </div>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-semibold">Bio</h4>
          <p className="text-justify">{profile.bio}</p>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-semibold">Brief Idea</h4>
          <p className="text-justify">{profile.briefIdea}</p>
          <p className="mt-2 text-sky-700 italic text-wrap">
            {profile.hashtags.join(" ")}
          </p>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-semibold">
            Collaborator&apos;s Top Skills
          </h4>
          <div className="flex flex-row flex-wrap gap-1">
            {profile.requiredSkills.map((skill) => (
              <span
                key={skill}
                className="py-1.5 px-3 border border-slate-400 rounded-xl"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Action handleDislike={handleDislike} />
    </div>
  );
}

function FlipCardBack({ profile, handleDislike }) {
  return (
    <div
      className="flip-card-back absolute h-full flex flex-col p-4"
      style={{ transform: "rotateY(180deg)" }}
    >
      <div className="grow">
        <IconFilled name="autorenew" className="flex justify-end" />
        <h3 className="text-xl font-bold">{profile.name}</h3>
        {/* <div className="py-2">
          <h4 className="text-lg font-semibold">Bio</h4>
          <p className="text-justify h-20 overflow-y-auto">{profile.bio}</p>
        </div> */}
        <div className="py-2">
          <h4 className="text-lg font-semibold">Vision</h4>
          <p className="text-justify">{profile.vision}</p>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-semibold">
            Collaborator&apos;s Top Requirements
          </h4>
          {profile.requirements.map((requirement) => (
            <span key={requirement} className="flex flex-row p-1">
              <IconFilled name="diamond" className="mr-1 p-1 text-sky-700" />
              {requirement}
            </span>
          ))}
        </div>
      </div>
      <Action handleDislike={handleDislike} />
    </div>
  );
}

function Action({ handleDislike }) {
  const onDislike = (event) => {
    event.stopPropagation();
    handleDislike();
  };
  return (
    <div className="flex-none">
      <div className="flex flex-row justify-between items-center px-16 pb-4 bottom-0">
        <IconFilled
          name="thumb_down"
          className="p-3 rounded-full bg-red-600 text-white text-[28px]"
          handleClick={onDislike}
        />
        <IconFilled
          name="star"
          className="p-2 rounded-full bg-orange-500 text-white text-[24px]"
        />
        <IconFilled
          name="thumb_up"
          className="p-3 rounded-full bg-green-600 text-white text-[28px]"
        />
      </div>
    </div>
  );
}
export default Card;
