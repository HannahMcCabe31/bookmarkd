async function updateBookshelf(user_id, book_id, bookshelf_id) {
    const method = "PATCH";
    const responseRequest = await fetch(
        `https://bookmarkd-server.onrender.com/api/customshelves?user_id=${user_id}&book_id=${book_id}&bookshelf_id=${bookshelf_id}`,
        {
            method: method,
            headers: {
                Accept: "application/json",
            },
        }
    );

    if (responseRequest.ok) {
        /* alert(`All gucci`); */
    }

    if (!responseRequest.ok) {
        console.error(`Status: ${responseRequest.status}`);
        console.error(`Text: ${await responseRequest.text()}`);
        console.error("Data not available");
    }
}

export default updateBookshelf;
