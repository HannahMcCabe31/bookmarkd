const [userData, setUserData] = useState()

useEffect(() => {
    async function getUserInfo() {
        const responseRequest = await fetch(`http://localhost:3000/api/user?user_id=${token.user.id}`, {
            method: `GET`,
            headers: {
                Accept: "application/json",
            },
        });
    
        if (!responseRequest.ok) {
            console.error(`Status: ${responseRequest.status}`);
            console.error(`Text: ${await responseRequest.text()}`);
            console.error("Data not available");
            return;
        }
        const responseData = await responseRequest.json();
        console.log(responseData)
        return responseData
}
getUserInfo()
}, [])