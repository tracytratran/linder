import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import "../styling/Card.css";
import IconFilled from "./IconFilled";
import Alert from "@mui/material/Alert";

function Card({ profile, handleDislike, direction }) {
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
        className={`flip-card-inner swipe-${direction} relative w-full h-full shadow-md sm:my-4 ${
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
  const [open, setOpen] = useState(false);

  const onLike = (event) => {
    event.stopPropagation();
    setOpen(true);
  };

  const onDislike = (event) => {
    event.stopPropagation();
    handleDislike();
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "25vh",
    bottom: 0,
    width: "100%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
    // transform: "translateY(100%)",
    transition: "opacity 250ms ease-out",
    fontFamily: "'Poppins', san-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const defaultMessage = `Hi Anne,\n\nIt's great to connect with you! I was impressed by your idea for a 24/7 booking platform for Aarhus University. It aligns closely with my interests in enhancing campus accessibility and user experience. I'd love to discuss potential collaboration opportunities with you.\n\nLooking forward to connecting!\n\nBest regards,\n\nMichael Thompson`;

  const [message, setMessage] = useState(defaultMessage);
  const [openMessage, setOpenMessage] = useState(false);

  const handleSend = (event) => {
    event.stopPropagation();
    setOpen(false);
    setOpenMessage(true);
  };

  const handleCloseMessage = (event, reason) => {
    event.stopPropagation();
    if (reason === "clickaway") {
      return;
    }

    setOpenMessage(false);
  };

  const [openFavourite, setOpenFavourite] = useState(false);

  const handleFavourite = (event) => {
    event.stopPropagation();
    setOpenFavourite(true);
  };

  const handleCloseFavourite = (event, reason) => {
    event.stopPropagation();
    if (reason === "clickaway") {
      return;
    }

    setOpenFavourite(false);
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
          handleClick={handleFavourite}
        />
        <IconFilled
          name="thumb_up"
          className="p-3 rounded-full bg-green-600 text-white text-[28px]"
          handleClick={onLike}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="rounded-md"
        >
          <Box sx={style}>
            <IconFilled
              name="close"
              className="flex justify-end"
              handleClick={handleClose}
            />
            <h5>
              Send a message and increase your chances of getting a match by up
              to 25%
            </h5>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={16}
              className="text-justify"
            />

            <button
              className="w-full py-2.5 text-base text-white bg-sky-700 border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-[#303f9f] my-4"
              onClick={handleSend}
            >
              Send
            </button>
          </Box>
        </Modal>
        <Snackbar
          open={openFavourite}
          autoHideDuration={3000}
          onClose={handleCloseFavourite}
        >
          <Alert
            onClose={handleCloseFavourite}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            This profile has been saved.
          </Alert>
        </Snackbar>
        <Snackbar
          open={openMessage}
          autoHideDuration={5000}
          onClose={handleCloseMessage}
        >
          <Alert
            onClose={handleCloseMessage}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Your message has been sent.
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}
export default Card;
