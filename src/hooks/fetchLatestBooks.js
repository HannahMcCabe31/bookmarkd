async function fetchLatestBooks(token) {

    const responseRequest = await fetch(
        `https://bookmarkd-server.onrender.com/api/currentbooks?user_id=${token.user.id}`,
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

export default fetchLatestBooks