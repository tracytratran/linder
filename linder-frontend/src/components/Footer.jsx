import IconOutlined from "./IconOutlined";

function Footer() {
  return (
    <footer className="absolute bottom-0 shadow-t w-full md:w-1/2 flex flex-row justify-between border-t">
      <IconOutlined
        name="home"
        className="p-4 text-4xl border-t-4 border-sky-700"
      />
      <IconOutlined name="star" className="p-4 text-4xl" />
      <IconOutlined name="sms" className="p-4 text-4xl" />
      <IconOutlined name="more_horiz" className="p-4 text-4xl" />
    </footer>
  );
}

export default Footer;
