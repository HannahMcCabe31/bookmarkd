/* */

function MobileResizeWarning(props) {
  function handleLogout() {
    sessionStorage.removeItem("token");
    props.navigate("/");
    props.setToken(false);
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center text-3xl text-white">
      <div className="max-w-md">
        <h1 className="mb-3">
          Hello, {props.token.user.user_metadata.username}
        </h1>
        <p className="mb-5">
          For an optimal mobile experience, please resize your browser window to
          a mobile size screen. This will ensure you have access to all
          bookmarkd's features.
        </p>
      </div>
      <button
        className="border p-2 hover:text-star-blue"
        onClick={handleLogout}
      >
        LOG OUT
      </button>
    </div>
  );
}

export default MobileResizeWarning;
