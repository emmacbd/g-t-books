# GÜT BOOKS

## About The Project
GÜT  BOOKS provides a place to peruse classic (and free) literature to those who long for the quiet serenity and leather-scented ambiance of an well-worn library without having to change out of their dressing gowns. 

This was my final project for Mod 3 in Turing School of Software and Design's Front End Engineering program. 


With this application users are able to view a variety of free e-books sourced by [Project Gutenberg](https://www.gutenberg.org/). The user can flip through all selections, or choose to filter by their preferred genre. The user can click on their desired book to find more information, including a link to a free e-book. Users may also choose to save their selected tome to their own personal library, found under the link 'My Shelf'. 

## Technologies
* React | React Router
* Cypress
* Javascript
* HTML
* CSS

## Set Up Instructions
#### Deployed Site
1. Visit [GÜT BOOKS](https://g-t-books.herokuapp.com/) via your browser

#### Running it Locally
1. Clone this repo to your local machine
2. `cd ` into `g-t-books`
3. Then, run `npm install `from your command line. Do not run `npm audit fix --force`
4. After you run npm install inside of your copy of this repo, run:
`npm start`

This command runs the app in the development mode locally so that you can view and use the application in your browser.
```
You can now view GÜT BOOKS in the browser.
  Local:  http://localhost:3000
```

5. When you are done exploring _**GÜT BOOKS**_ make sure that you type `Control + C` in your terminal to stop the server before closing your Terminal.
---

## Using the Application
Upon load, a user will see a populated bookshelf. The user can choose to filter by genre with the dropdown menu above the bookshelf. They can click on their chosen book, which will take the to that book's details. They can return home by clicking All Books from the navbar, using the brower back button, or removing the `/(book's id)` from the URL.

![Main Page Functionality](https://user-images.githubusercontent.com/93603551/173256292-f4def0d0-d695-4c22-b76c-677b46e218bb.gif)

#### Filtering By Genre
If wishing to narrow down their book selection, the user can click the dropdown button above the main shelf, and. 

![Filter Functionality](https://user-images.githubusercontent.com/93603551/173256375-4607994d-a942-4d1c-bf23-faaa973fed4a.gif)

## Future Features
* Add delete functionality so user may remove books from their saved shelf
* Incorporate local storage so user's saved books persist on page refresh 
* Add additional links for variety of free formats 

----
## Contributor
- [Emma Brooke-Davison](https://github.com/emmacbd)


## Acknowledgments

* [Turing Scool of Software & Design](https://turing.edu/)
* Turing Instructors: Kayla Gordon and Robbie Jaeger
* [Gutendex](https://gutendex.com/)
