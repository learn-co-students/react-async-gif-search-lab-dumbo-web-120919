import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {

    state = {
        threeGifs: []
    }


   fetchData = (input) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${input}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {this.setState({threeGifs: data.data.map(gif => gif.images.original.url)})})
        }
    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div>
                <GifSearch search={this.fetchData} />
                <GifList list={this.state.threeGifs} />
            </div>
        )
    }

}