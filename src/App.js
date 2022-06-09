import React from 'React';
import './App.css';
import { Route } from 'react-router-dom';
import { fetchBooks } from './apiCalls';


class App extends Component {
  constructor() {
    super();

    this.state = {
      bookData: [],
      filteredBooks: [],
      savedBooks: []
    }
  }

  componentDidMount() {
    fetchBooks()
      .then(data => this.setState({ bookData: data, filteredBooks: data, savedBooks: [] }))
      .catch(error => {
        console.log("Oh no!", error)
      });
  }



  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main className="shelf-display">
          <Route exact path='/' render={() => <MainShelf bookData={this.state.filteredBooks} />} />
          <Route exact path="/my-shelf" />
        </main>
      </div>
    )
  }




}


export default App;
