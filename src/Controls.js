import React from 'react';
// import apiKey from './apiKey'

class Controls extends React.Component {
  state = {index: 0}
  
  updateResults = () => {
    const url = `${this.props.url}&startIndex=20`;
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(arr => this.props.update(this.props.query, arr.items, url));
  }

  next = () => {
    const index = (this.state.index >= 30) ? 30 : this.state.index + 10;
    this.setState({index})
    this.updateResults();
  }

  back = () => {
    const index = (this.state.index <= 0) ? 0 : this.state.index - 10;
    this.setState({index})
    this.updateResults();
  }

  render() {
    return (
      <div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.next}>Next</button>
      </div>
    )
  }
}

export default Controls;