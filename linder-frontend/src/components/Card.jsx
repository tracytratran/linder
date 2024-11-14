import { useState } from "react";
import IconFilled from "./IconFilled";
import "../styling/Card.css";

function Card() {
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
      >
        <FlipCardFront />
        <FlipCardBack />
      </div>
    </div>
  );
}

function FlipCardFront() {
  return (
    <div className="flip-card-front absolute h-full flex flex-col px-4 py-2">
      <IconFilled name="autorenew" className="flex justify-end" />
      <div className="grow">
        <div className="flex flex-row justify-around py-2">
          <img
            src="/src/assets/avatar/AnneAnderson.JPG"
            alt="Avatar of Anne Anderson"
            className="size-28 rounded-full border-2"
          />
          <div className="flex flex-col py-2">
            <h3 className="text-xl font-bold">Anne Anderson</h3>
            <span className="text-lg">Student Services Coordinator</span>
            <span className="text-lg">@ Aarhus University</span>
            <span className="text-lg">Aarhus, Denmark</span>
          </div>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-semibold">Brief Idea</h4>
          <p className="text-justify">
            I want to create a digital platform that allows students and faculty
            at Aarhus University to seamlessly book classrooms, study rooms, and
            other campus facilities.
          </p>
          <p className="mt-2 text-sky-700 italic">
            #EdTech #RoomBooking #UniversityPlatform #FacilityManagement
            #ProductivityTools #UserExperience #InnovationInEducation
          </p>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-semibold">
            Collaborator&apos;s Top Skills
          </h4>
          <div className="flex flex-row flex-wrap gap-1">
            <span className="p-1 border border-slate-400 rounded-xl">
              Frontend Development
            </span>
            <span className="p-1 border border-slate-400 rounded-xl">
              Backend Development
            </span>
            <span className="p-1 border border-slate-400 rounded-xl">
              UX/UI Design
            </span>
            <span className="p-1 border border-slate-400 rounded-xl">
              Project Management
            </span>
          </div>
        </div>
      </div>
      <Action />
    </div>
  );
}

function FlipCardBack() {
  return (
    <div className="flip-card-back absolute h-full flex flex-col p-4">
      <IconFilled name="autorenew" className="flex justify-end" />
      <div className="grow">
        <h3 className="text-xl font-bold">Anne Anderson</h3>
        <div className="py-2">
          <h4 className="text-lg font-semibold">Bio</h4>
          <p className="text-justify">
            A Student Services Coordinator at Aarhus University who has over a
            decade of experience in enhancing campus life for students with a
            strong commitment to education innovation.
          </p>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-semibold">Vision</h4>
          <p className="text-justify">
            Passionate about streamlining processes and improving accessibility,
            I am spearheading the development of a user-friendly room-booking
            platform aimed at simplifying space reservations for students and
            faculty...
          </p>
        </div>
        <div className="py-2">
          <h4 className="text-lg font-semibold">
            Collaborator&apos;s Requirements
          </h4>
          <span className="flex flex-row p-1">
            <IconFilled name="diamond" className="mr-1 text-sky-700" />
            Experience in React, Angular, or similar frameworks to build a
            user-friendly interface
          </span>
          <span className="flex flex-row p-1">
            <IconFilled name="diamond" className="mr-1 text-sky-700" />
            Skills in database management and system architecture for real-time
            availability tracking
          </span>
        </div>
      </div>
      <Action />
    </div>
  );
}

function Action() {
  return (
    <div className="flex flex-row justify-between items-center px-16 pb-4 bottom-0">
      <IconFilled
        name="thumb_down"
        className="p-3 rounded-full bg-red-600 text-white text-[28px]"
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
  );
}
export default Card;
