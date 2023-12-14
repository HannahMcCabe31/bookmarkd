function handleSignOut() {
    sessionStorage.removeItem("token");
    setToken(false);
}

export default handleSignOut()