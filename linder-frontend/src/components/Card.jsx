import IconFilled from "./IconFilled";

function Card() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 142px)" }}>
      <div className="grow border border-sky-700 m-4 rounded-lg">Card</div>
      <Action />
    </div>
  );
}

function Action() {
  return (
    <div className="flex flex-row justify-between items-center px-16 pb-4 bottom-0">
      <IconFilled
        name="thumb_down"
        className="p-4 rounded-full bg-red-600 text-white text-[36px]"
      />
      <IconFilled
        name="star"
        className="p-3 rounded-full bg-orange-500 text-white text-[28px]"
      />
      <IconFilled
        name="thumb_up"
        className="p-4 rounded-full bg-green-600 text-white text-[36px]"
      />
    </div>
  );
}
export default Card;
