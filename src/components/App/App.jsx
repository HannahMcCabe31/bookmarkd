import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, HomePage } from "../index";

function App() {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken} />} />
        {token ? (
          <Route path="/homepage" element={<HomePage token={token} />} />
        ) : null}
      </Routes>
    </>
  );
}

export default App;
