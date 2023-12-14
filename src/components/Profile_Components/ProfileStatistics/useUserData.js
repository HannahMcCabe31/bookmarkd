function useUserData(token) {
    if (token) {
        return (async function getUserInfo() {
            try {
                const responseRequest = await fetch(
                    `https://bookmarkd-server.onrender.com/api/user?user_id=${token.user.id}`,
                    {
                        method: `GET`,
                        headers: {
                            Accept: "application/json",
                        },
                    }
                );

                if (responseRequest.ok) {
                    const responseData = await responseRequest.json();
                    return responseData.payload;
                } else {
                    console.error(`Status: ${responseRequest.status}`);
                    console.error(`Text: ${await responseRequest.text()}`);
                    console.error("Data not available");
                    return null;
                }
            } catch (error) {
                console.error(`Error fetching: ${error}`);
                return null;
            }
        })();
    }
    return null;
}

export default useUserData