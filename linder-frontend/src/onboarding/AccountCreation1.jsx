function AccountCreation1() {
  return (
    <div className="input-field">
      <h1 className="input-field__title">Join Linder</h1>
      <form className="input-field__form">
        <label className="input-field__form__label">Email<input type="email" placeholder="johndoe@example.com" /></label>
        <label className="input-field__form__label">Password<input type="password" placeholder="Must have at least 6 characters" /></label>
      </form>
      {/* <button type="submit">Continue</button> */}
    </div>
  );
}

export default AccountCreation1;
