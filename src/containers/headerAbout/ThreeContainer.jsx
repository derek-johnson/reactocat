import React, { Component } from 'react';
import threeEntryPoint from './threejs/threeEntryPoint';

// import '../../styles/ThreeContainer.css';

class ThreeContainerAbout extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render() {
    /* eslint-disable no-return-assign */
    return (
      <div
        className="header-header"
        ref={element => (this.threeRootElement = element)}
      />
    );
    /* eslint-enable no-return-assign */
  }
}

export default ThreeContainerAbout;
