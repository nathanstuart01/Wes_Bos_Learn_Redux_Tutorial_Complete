import React from 'react';
import Photo from './Photo';

const photoGrid = React.createClass({
  render() {
    return (
      <div className='photo-grid'>
      {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      //above code imports the photo component
      </div>
    )
  }
});

export default photoGrid;
