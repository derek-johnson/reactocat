import React, { Component } from 'react';
import Hamburger from './hamburger';
import Menu from './menu';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();

    /* eslint-disable no-console */
    console.log('clicked');
    e.stopPropagation();
    /* eslint-enable no-console */
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="test">
        <Hamburger handleMouseDown={this.handleMouseDown} />
        <Menu
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}
        />
      </div>
    );
  }
}

export default Nav;
