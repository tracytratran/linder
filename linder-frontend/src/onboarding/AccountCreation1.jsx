function AccountCreation1() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5 text-gray-800">Join Linder</h1>
      <form className="w-full flex flex-col items-center gap-4">
        <label className="w-full">Email<input type="email" placeholder="johndoe@example.com" required /></label>
        <label className="w-full">Password<input type="password" placeholder="Must have at least 6 characters" required /></label>
      </form>
      {/* <button type="submit">Continue</button> */}
    </div>
  );
}

export default AccountCreation1;
