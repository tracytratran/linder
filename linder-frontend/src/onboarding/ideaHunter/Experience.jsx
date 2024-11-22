function Experience() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">
        What is your experience?
      </h1>
      <form className="w-full flex flex-col items-center gap-4">
        <label className="w-full">
          Title*
          <input type="text" placeholder="e.g. Freelancer" required />
        </label>
        <label className="w-full">
          Employment type
          <input type="text" placeholder="Full-time" />
        </label>
        <label className="w-full">
          Company or Organisation*
          <input type="text" placeholder="Roccai" required />
        </label>
        <span className="text-left mt-0 w-full">
          <input type="checkbox" /> I am currently working in this role
        </span>
        <label className="w-full">
          Start date*
          <input type="date" placeholder="dd/mm/yyyy" required className="no-icon" />
        </label>
        <label className="w-full">
          End date*
          <input type="date" placeholder="dd/mm/yyyy" required  className="no-icon"/>
        </label>
        <label className="w-full">
          Location
          <input type="text" placeholder="Aarhus" />
        </label>
        <button className="w-[30%] mr-auto px-2 py-2.5 bg-blue-600 text-white shadow-md border-0 text-base font-semibold rounded-lg hover:bg-blue-400 transition-all duration-300">+ Add Skill</button>
      </form>
      {/* <button type="submit">Agree & Join</button> */}
    </div>
  );
}

export default Experience;
