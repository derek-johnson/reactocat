import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(prevState => ({ animate: !prevState.animate }));
    e.preventDefault();
  }

  render() {
    const animationClasses = this.state.animate ? 'active' : '';

    const hamburgerClass = classNames('hamburger', 'snap');

    return (
      <div>
        <div
          className="headroom"
          id="header"
          role="button"
          tabIndex="0"
          onKeyPress={this.handleKeyPress}
          onClick={this.handleClick}
          onMouseDown={this.props.handleMouseDown}
        >
          <div className={`${hamburgerClass} ${animationClasses}`}>
            <div className="top">
              <div className="line-in top" />
            </div>
            <div className="middle">
              <div className="line-in middle" />
            </div>
            <div className="bottom">
              <div className="line-in bottom" />
            </div>
            <div className="cross left">
              <div className="line-in cross left active" />
            </div>
            <div className="cross right">
              <div className="line-in cross right active" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hamburger.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
};

export default Hamburger;

// const Hamburger = ({ handleMouseDown }) => (
// <div>
//   <button id="roundButton" onMouseDown={handleMouseDown} />
//   <div className="headroom" id="header">
//     <div className={hamburgerClass}>
//       <div className="top">
//         <div className="line-in top" />
//       </div>
//       <div className="middle">
//         <div className="line-in middle" />
//       </div>
//       <div className="bottom">
//         <div className="line-in bottom" />
//       </div>
//       <div className="cross left">
//         <div className="line-in cross left active" />
//       </div>
//       <div className="cross right">
//         <div className="line-in cross right active" />
//       </div>
//     </div>
//   </div>
// </div>
// );
//
// Hamburger.propTypes = {
//   handleMouseDown: PropTypes.func.isRequired,
//   active: PropTypes.string.isRequired,
// };

// Starting hamburger
// class Hamburger extends Component {
//   render() {
//     return (
//       <button
//         className={`hamburger hamburger--active ${this.props.active}`}
//         onClick={this.props.onClick}
//         type="button"
//       >
//         <span className="roundButton">Menu</span>
//         <span className="hamburger-box">
//           <span className="hamburger-inner" />
//         </span>
//       </button>
//     );
//   }
// }
//
// Hamburger.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   active: PropTypes.string.isRequired,
// };

// export default Hamburger;
