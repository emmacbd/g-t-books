
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


// {
//     "id": 1342,
//     "title": "Pride and Prejudice",
//     "authors": [
//       {
//         "name": "Austen, Jane",
//         "birth_year": 1775,
//         "death_year": 1817
//       }
//     ],
//     "translators": [],
//     "subjects": [
//       "Courtship -- Fiction",
//       "Domestic fiction",
//       "England -- Fiction",
//       "Love stories",
//       "Sisters -- Fiction",
//       "Social classes -- Fiction",
//       "Young women -- Fiction"
//     ],
//     "bookshelves": [
//       "Best Books Ever Listings",
//       "Harvard Classics"
//     ],
//     "languages": [
//       "en"
//     ],
//     "copyright": false,
//     "media_type": "Text",
//     "formats": {
//       "image/jpeg": "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.small.jpg",
//       "text/plain; charset=utf-8": "https://www.gutenberg.org/files/1342/1342-0.zip",
//       "text/html": "https://www.gutenberg.org/ebooks/1342.html.images",
//       "text/html; charset=utf-8": "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm",
//       "application/rdf+xml": "https://www.gutenberg.org/ebooks/1342.rdf",
//       "application/epub+zip": "https://www.gutenberg.org/ebooks/1342.epub.images",
//       "application/x-mobipocket-ebook": "https://www.gutenberg.org/ebooks/1342.kindle.images"
//     },
//     "download_count": 50312
//   },

// const singleBookCleaner = (singleBook) => {
//     const sources = Object.keys(singleBook.formats)
//     const parser = new DOMParser();

//         const bookSource = parser.parseFromString(htmlContent, 'text/html')
//         .filter()
// }


// onst getIngredientList = () => {
//     const ingredientList = Object.keys(drink)
//       .filter(prop => prop.includes("Ingredient"))
//       .reduce((list, ingredient) => {
//         if (drink[ingredient])
//         list.push(drink[ingredient])
//         return list
//       }, []);
  
//     return ingredientList.map(ingredient => {
//       if (drink[`strMeasure${ingredientList.indexOf(ingredient) + 1}`]) {
//         return `${ingredient}: ${drink[`strMeasure${ingredientList.indexOf(ingredient) + 1}`]}`
//       } else {
//         return `${ingredient}`
//       };
//     });
//   };

//   return {
//     id: drink.idDrink,
//     name: drink.strDrink,
//     image: drink.strDrinkThumb,
//     glass: drink.strGlass,
//     ingredients: getIngredientList(),
//     instructions: drink.strInstructions
//   };

export { fetchBooks, fetchSingleBook }