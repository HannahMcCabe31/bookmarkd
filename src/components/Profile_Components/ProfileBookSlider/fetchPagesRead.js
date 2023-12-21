async function fetchPagesRead(user_id, book_id) {
    const userBookData = await fetch(
        `https://bookmarkd-server.onrender.com/api/user_book_data?book_id=${book_id}&user_id=${user_id}`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        }
    );

    if (userBookData.ok) {
        const data = await userBookData.json();
        return data.payload.page_progress;
    }
}

export default fetchPagesRead;
