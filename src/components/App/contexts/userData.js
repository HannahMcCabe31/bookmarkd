// Import the token data into this hook
// Import state and set up the userData state in here
// Run da function to set the state
// Return relevent value(s) as an object, destructure on the other side.

import { useState } from "react";


function useUserData() {
    const [token, setToken] = useState(false);
    const [userData, setUserData] = useState(null)

    if (sessionStorage.getItem("token")) {
        let data = JSON.parse(sessionStorage.getItem("token"));
        setToken(data);
    }


}

export default useUserData