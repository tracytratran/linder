function Bio() {
  return (
    <div className="input-field">
      <h1 className="input-field__title">Tell others about yourself</h1>
      <label className="input-field__label">
        Short Bio
        <textarea
          placeholder="I am a..."
          style={{ width: "100%", height: "200px", resize: "none" }}
        ></textarea>
      </label>
      {/* <button type="submit">Next</button> */}
    </div>
  );
}

export default Bio;
