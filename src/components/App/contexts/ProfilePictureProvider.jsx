import React, { createContext, useState } from 'react';

export const ProfilePictureContext = createContext();

function ProfilePicProvider({children}) {

    const [hasProfilePic, setHasProfilePic] = useState([])

    return (
        <ProfilePictureContext.Provider value={{ hasProfilePic, setHasProfilePic }}>
            {children}
        </ProfilePictureContext.Provider>
    )
}

export default ProfilePicProvider