function Experience() {
  return (
    <div className="input-field">
      <h1 className="input-field__title">What is your experience?</h1>
      <form className="input-field__form">
        <label className="input-field__form__label">
          Title*
          <input type="text" placeholder="Freelancer" />
        </label>
        <label className="input-field__form__label">
          Employment type
          <input type="text" placeholder="Full-time" />
        </label>
        <label className="input-field__form__label">
          Company or Organisation*
          <input type="text" placeholder="Roccai" />
        </label>
        <span className="input-field__form__span">
          <input type="checkbox" /> I am currently working in this role
        </span>
        <label className="input-field__form__label">
          Start date*
          <input type="text" placeholder="dd/mm/yyyy" />
        </label>
        <label className="input-field__form__label">
          End date*
          <input type="text" placeholder="dd/mm/yyyy" />
        </label>
        <label className="input-field__form__label">
          Location
          <input type="text" placeholder="Aarhus" />
        </label>
        <button className="exp-btn">+ Add Skill</button>
      </form>
      {/* <button type="submit">Agree & Join</button> */}
    </div>
  );
}

export default Experience;
