import Card from "../components/Card";
import NavigationBar from "../components/NavigationBar";

function Feed() {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="mx-0 w-full md:w-1/2">
          <Card />
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}

export default Feed;
