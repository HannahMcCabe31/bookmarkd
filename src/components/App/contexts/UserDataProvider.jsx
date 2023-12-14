import { createContext, useState } from "react";

export const UserDataContext = createContext();

function UserDataProvider({ children }) {
    const [userData, setUserData] = useState(null);

    return (
        <UserDataContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserDataContext.Provider>
    );
}

export default UserDataProvider;
