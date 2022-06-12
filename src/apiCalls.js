
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


const fetchSingleBook = (id) => {
    return fetch(`https://gutendex.com/books/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('error')
            } else {
                const singleBook = response.json()
                return singleBook
            }
        })
}





export { fetchBooks, fetchSingleBook }