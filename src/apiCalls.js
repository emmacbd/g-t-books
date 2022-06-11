const fetchBooks = {
    getBookData() {
        return fetch('https://gutendex.com/books/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('error')
                } else {
                    return response.json()
                }
            })
    }
}


async function fetchSingleBook(id) {
    const response = await fetch(`https://gutendex.com/books/${id}`)
    if (!response.ok) {
        throw new Error('Network response was not OK')
    }
    const singleBook = response.json()
    return singleBook
}

export { fetchBooks, fetchSingleBook }