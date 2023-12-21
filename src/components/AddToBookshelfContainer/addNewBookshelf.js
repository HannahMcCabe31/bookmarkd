import { v4 as uuidv4 } from "uuid"

async function addNewBookshelf(user_id, bookshelf_name, book_id) {
    const bookshelf_id = uuidv4()
    const method = "POST";
    const responseRequest = await fetch(
        `https://bookmarkd-server.onrender.com/api/createbookshelf?user_id=${user_id}&book_id=${book_id}&bookshelf_name=${bookshelf_name}&bookshelf_id=${bookshelf_id}`,
        {
            method: method,
            headers: {
                Accept: "application/json",
            },
        }
    );

/*     if (responseRequest.ok) {
        alert(`All gucci`);
    } */

    if (!responseRequest.ok) {
        console.error(`Status: ${responseRequest.status}`);
        console.error(`Text: ${await responseRequest.text()}`);
        console.error("Data not available");
    }
}

export default addNewBookshelf