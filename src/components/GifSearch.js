import React from 'react';

export default class GifSearch extends React.Component {

  state = {  
    newSearchTerm: ""
  }

  handleInputChange = (event) => {
    this.setState({
      newSearchTerm: event.target.value
    }, console.log(event.target.value))
  }

  handleInitialSearchSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearchSubmit(this.state.newSearchTerm)
    this.resetSearchInput()
  }

  resetSearchInput = () => {
    this.setState({
      newSearchTerm: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleInitialSearchSubmit}>
          <input type="text" name="searchTerm" placeholder="Enter search term..." value={this.state.newSearchTerm} onChange={this.handleInputChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }

}