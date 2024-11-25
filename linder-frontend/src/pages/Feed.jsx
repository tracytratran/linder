import { useState } from "react";
import Card from "../components/Card";
import NavigationBar from "../components/NavigationBar";
import { profiles } from "../profiles";

function Feed() {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    setTimeout(() => {
      setCurrentProfileIndex((previousIndex) => previousIndex + 1);
      setSwipeDirection(null);
    }, 600);
  };

  const currentProfile = profiles[currentProfileIndex];

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mx-0 w-full sm:w-1/2 md:w-1/3">
          {currentProfile ? (
            <Card
              profile={currentProfile}
              onSwipe={handleSwipe}
              swipeDirection={swipeDirection}
            />
          ) : (
            <p>No more profiles</p>
          )}
          {/* {profiles.map((profile) => (
            <Card key={profile.id} profile={profile} />
          ))} */}
        </div>
      </div>
      <NavigationBar />
    </>
  );
}

export default Feed;
