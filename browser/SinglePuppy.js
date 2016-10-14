import React, { Component } from 'react';

export default class SinglePuppy extends Component {

  render () {

    let { singlePuppy } = this.props;

    return (
      <div>
        <h2>{singlePuppy.name}</h2>
        <div>
          <img src={singlePuppy.image} />
        </div>
      </div>
    )
  }
}
