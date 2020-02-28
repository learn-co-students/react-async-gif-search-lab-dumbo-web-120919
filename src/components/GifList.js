import React from 'react'

const GifList = props => {
  console.log(props);
  return (
    <div>
        {props.list.map(gif => <img src={gif} alt={gif}/>)}
    </div>
  )
}

export default GifList