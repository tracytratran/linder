import IconFilled from "./IconFilled";

function NavigationBar() {
  return (
    <div className="absolute flex flex-row justify-center items-center w-full bottom-0 border-t">
      <div className="flex flex-row w-full sm:w-1/2 md:w-1/3 justify-between items-center">
        <IconFilled
          name="home"
          className="p-4 text-4xl border-t-4 border-sky-700 text-sky-700"
        />
        <IconFilled name="star" className="p-4 text-4xl text-gray-500" />
        <IconFilled name="sms" className="p-4 text-4xl text-gray-500" />
        <IconFilled name="more_horiz" className="p-4 text-4xl text-gray-500" />
      </div>
    </div>
  );
}

export default NavigationBar;
