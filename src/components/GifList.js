import React from 'react';

export default class GifList extends React.Component {

  state = {

  }

  render() {

    let gifURLs = this.props.gifURLs

    return (
      <div>
        <ul>
          <li><img src={gifURLs[0]}/></li>
          <li><img src={gifURLs[1]}/></li>
          <li><img src={gifURLs[2]}/></li>
        </ul>
      </div>
    )
  }

}