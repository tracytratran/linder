import { useState } from "react";
import Card from "../components/Card";
import NavigationBar from "../components/NavigationBar";
import { profiles } from "../profiles";

function Feed() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  const [swipeDirection, setSwipeDirection] = useState(null);

  const currentProfile = profiles[currentProfileIndex];

  // const handleDislike = () => {
  //   setCurrentProfileIndex((previousIndex) => previousIndex + 1);
  // };

  const handleDislike = () => {
    setSwipeDirection("left");
    setTimeout(() => {
      setCurrentProfileIndex((previousIndex) => previousIndex + 1);
      setSwipeDirection(null);
    }, 200);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mx-0 w-full sm:w-1/2 md:w-1/3">
          {currentProfile && (
            <Card
              profile={currentProfile}
              handleDislike={handleDislike}
              direction={swipeDirection}
            />
          )}
        </div>
      </div>
      <NavigationBar />
    </>
  );
}

export default Feed;
