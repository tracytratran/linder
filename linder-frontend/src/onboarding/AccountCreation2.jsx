function AccountCreation2() {
  return (
    <div className="input-field">
      <h1 className="input-field__title">Join Linder</h1>
      <form className="input-field__form">
        <label className="input-field__form__label">
          First Name
          <input type="text" placeholder="John" />
        </label>
        <label className="input-field__form__label">
          Last Name
          <input type="text" placeholder="Doe" />
        </label>
      </form>
      <span className="input-field__span">
        By clicking Agree & Join, you agree to Privacy Policy and Terms of
        Service.
      </span>
      {/* <button type="submit">Agree & Join</button> */}
    </div>
  );
}

export default AccountCreation2;
