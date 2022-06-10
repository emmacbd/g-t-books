const fetchBooks = () => {
    return fetch('https://gutendex.com/books')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK')
            }
            return response.json();
        })
}

export { fetchBooks }