function getUserInfo() {
        if (token) {
            console.log(`Token is true so lezgo`)
            async function getUserInfo() {
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
                } else if (!responseRequest.ok) {
                    console.error(`Status: ${responseRequest.status}`);
                    console.error(`Text: ${await responseRequest.text()}`);
                    console.error("Data not available");
                    return;
                }
            }

            getUserInfo()
                .then((payload) => {
                    setUserData(payload);
                })
                .catch((error) => {
                    console.error(`Error fetching: ${error}`);
                });

        }
}