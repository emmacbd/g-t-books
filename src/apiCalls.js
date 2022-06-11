async function fetchBooks() {
    try {
        const response = await fetch('https://gutendex.com/books')
        const data = await response.json()
        return data
    } catch (error) {
        window.alert(error)
    }
}


async function fetchSingleBook(id) {
    const response = await fetch(`https://gutendex.com/books/${id}`)
    if (!response.ok) {
        throw new Error('Network response was not OK')
    }
    return await response.json()
}

export { fetchBooks, fetchSingleBook }