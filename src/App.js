import React from 'react';
import Header from './Header'
import Search from './Search'
import Filter from './Filter'
import BookList from './BookList'
import './App.css'

class App extends React.Component {
  state = {query: '', books: []}

  update = (query, books) => {
    this.setState({query, books})
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <Search update={this.update} />
        <Filter
          query={this.state.query}
          update={this.update}
        />
        <BookList
          books={this.state.books}
        />
      </main>
    )
  }
}

export default App;
