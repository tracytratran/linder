function Bio() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">Tell others about yourself</h1>
      <label className="w-full">
        Short Bio
        <textarea
          placeholder="I am a..."
          maxLength={400}
          required
          style={{ width: "100%", height: "320px", resize: "none" }}
        ></textarea>
      </label>
      {/* <button type="submit">Next</button> */}
    </div>
  );
}

export default Bio;
