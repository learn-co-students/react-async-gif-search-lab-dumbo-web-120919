import React, { Component } from 'react';

export default class GifSearch extends Component {

    state = {
        searchTerm: ""
    }

    handleInputChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearchSubmit(this.state.searchTerm)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleInputChange} />
                </form>

            </div>
        )
    }

}