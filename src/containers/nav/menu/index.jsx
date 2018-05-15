import React from 'react';
import PropTypes from 'prop-types';

import MenuComponent from '../menucomponent';

// const Menu = ({ show }) => {
//   const menuClasses = ['flyoutMenu'];
//   if (show) {
//     menuClasses.push('show');
//   } else {
//     menuClasses.push('hide');
//   }

const Menu = props => {
  let visibility = 'hide';
  if (props.menuVisibility) {
    visibility = 'show';
  }

  return (
    <div>
      <div
        id="flyoutMenu"
        role="textbox"
        tabIndex="0"
        onMouseDown={props.handleMouseDown}
        className={visibility}
      >
        <MenuComponent />
      </div>
    </div>
  );
};

Menu.propTypes = {
  handleMouseDown: PropTypes.func.isRequired,
  menuVisibility: PropTypes.bool.isRequired,
};

export default Menu;
