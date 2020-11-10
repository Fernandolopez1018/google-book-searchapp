import React from 'react';
import Header from './Header'
import Search from './Search'
import Filter from './Filter'
import BookList from './BookList'
import Controls from './Controls'
import './App.css'

class App extends React.Component {
  state = {books: [], url: ''}

  update = (books, url) => {
    this.setState({books, url})
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
        
        {/* <Controls 
          update={this.update}
          url={this.state.url}
        /> */}
      </main>
    )
  }
}

export default App;
