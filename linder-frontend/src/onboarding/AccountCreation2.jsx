function AccountCreation2() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">Join Linder</h1>
      <form className="w-full flex flex-col items-center gap-4">
        <label className="w-full">
          First Name
          <input type="text" placeholder="John" required />
        </label>
        <label className="w-full">
          Last Name
          <input type="text" placeholder="Doe" required />
        </label>
      </form>
      <span className="text-sm text-gray-500 text-center mt-2.5 w-[90%] leading-relaxed">
        By clicking Agree & Join, you agree to Privacy Policy and Terms of
        Service.
      </span>
      {/* <button type="submit">Agree & Join</button> */}
    </div>
  );
}

export default AccountCreation2;
