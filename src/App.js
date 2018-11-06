import React, { Component } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import Books from './components/books';
import SearchBar from './components/search_bar';
import CartItem from './components/cartItems'

class App extends Component {
  state = {
    books: [],
    cart: []
  }
  componentDidMount() {
    axios.get(`http://localhost:8082/api/books`).then(res => {
      this.setState({books: res.data})
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Books booksList={this.state.books} />
      </div>
    );
  }
}

export default App;
