import React from 'React';
import './App.css';
import { Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      filteredBooks: [],
      savedBooks: []
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main className="shelf-display">
        <Route exact path='/' render={() => <MainShelf allBooks={this.state.filteredBooks}/>}/>
        <Route exact path="/my-shelf"/>
        </main>
      </div>
    )
  }




}


export default App;
