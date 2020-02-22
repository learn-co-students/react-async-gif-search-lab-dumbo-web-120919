import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

    state = {
        firstThreeGIFs: []
    }

    componentDidMount() {
        this.handleSearchSubmit()
    }

    handleSearchSubmit = (query = "dolphin") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=MDwKNhg6veduvQqtM0dsxIBtStmAQVMr&rating=g&limit=3`)
          .then(r => r.json())
          .then(({data}) => {
            // console.log({data})
            this.setState({ 
                firstThreeGIFs: data.map( gif => ({ url: gif.images.original.url }) ) 
            })
          })
        //   .then(dolphinGIFs => {
        //       this.setState({
        //           firstThreeGIFs: dolphinGIFs.data.map(gif => ({
        //               url: gif.images.original.url
        //           }))
        //       })
        //   })
    }

    render() {
        return(
            <div className="container">
                <h3>Search GIFs:</h3>
                <GifSearch handleSearchSubmit={this.handleSearchSubmit} />
                <br />
                <GifList gifs={this.state.firstThreeGIFs} />
            </div>
        )
    }

}