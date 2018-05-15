import React from 'react';
import { Link } from 'react-router-dom';

import Home from '../../home';
import About from '../../about';
import Contact from '../../contact';

const MenuComponent = () => (
  <div className="offCanvas">
    <svg width="1000" height="1000" xmlns="https://www.w3.org/2000/svg" />
    <svg
      className="grid"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      xmlns="https://www.w3.org/2000/svg"
    >
      <line x1="250" y1="0" x2="250" y2="1000" />
      <line x1="500" y1="0" x2="500" y2="1000" />
      <line x1="750" y1="0" x2="750" y2="1000" />
      <line x1="0" y1="250" x2="1000" y2="250" />
      <line x1="0" y1="500" x2="1000" y2="500" />
      <line x1="0" y1="750" x2="1000" y2="750" />
    </svg>
    {/* <svg
      className="grid"
      viewBox="0 0 900 450"
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      xmlns="https://www.w3.org/2000/svg"
    >
      <line x1="300" y1="0" x2="300" y2="900" />
      <line x1="600" y1="0" x2="600" y2="900" />
      <line x1="0" y1="150" x2="900" y2="150" />
      <line x1="0" y1="300" x2="900" y2="300" />
    </svg> */}
    <h2 className="offCanvas_home">
      <Link exact="true" to="/" component={Home} className="link-home">
        Home
      </Link>
    </h2>
    <h2 className="offCanvas_about">
      <Link to="/about" component={About} className="link-about">
        About
      </Link>
    </h2>
    <h2 className="offCanvas_contact">
      <Link to="/contact" component={Contact} className="link-contact">
        Contact
      </Link>
    </h2>
  </div>
);

export default MenuComponent;
// export default withRouter(connect(mapDispatchToProps)(MenuComponent));
