import React from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

  state = {
    currentSearchTerm: "",
    gifURLs: []
  }

  handleSearchSubmit = (newSearchTerm) => {
    let newerSearchTerm = newSearchTerm.replace(/ /g, "_")
    this.setState({
      currentSearchTerm: newerSearchTerm
    }, () => this.fetchGifsBySearchTerm())
  }

  fetchGifsBySearchTerm = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.currentSearchTerm}&api_key=bUDG7Vj0Z4dcTmAyoLA9WrWJkSl2kDK8&rating=g`)
    .then( r => r.json() )
    .then( gifs => {
      console.log(gifs)
      let firstThreeGifs = gifs.data.slice(0, 3)
      let gifURLs = firstThreeGifs.map( gif => gif.images.original.url )
      this.setState({
        gifURLs: gifURLs
      })
    })
  }

  render() {
    return (
      <div>
        < GifSearch handleSearchSubmit={this.handleSearchSubmit} />
        < GifList gifURLs={this.state.gifURLs} />
      </div>
    )
  }

}