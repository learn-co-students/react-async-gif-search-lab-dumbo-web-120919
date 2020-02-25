import React, { Component } from 'react'

export default class GifList extends Component {
    
    allGifs = () => {
        return this.props.gifs.map((gif) => {
            return <li>
                <img 
                    key={gif.url} 
                    src={gif.url} 
                    alt="gif"
                />
            </li>
        });
    }
        
    render() {
        console.log(this.props)
        return (
            <ul>
                {this.allGifs()}
            </ul>
        )
    }
}
