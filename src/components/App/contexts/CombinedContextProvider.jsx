import { UserDataContext } from "./UserDataProvider";
import { ProfilePictureContext } from "./ProfilePictureProvider";

function CombinedContextProvider({children}) {
    return (
        <UserDataContext.Consumer>
            <ProfilePictureContext.Consumer>
                {children}
            </ProfilePictureContext.Consumer>
        </UserDataContext.Consumer>
    )
}

export default CombinedContextProvider