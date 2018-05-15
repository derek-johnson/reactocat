import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ThreeContainerHome from '../headerHome/ThreeContainer';
// import '../headerHome/watercanvas';

const Home = props => (
  <div>
    <div className="home_container">
      <h1 className="home">Home</h1>
      <hr className="hr_small" />
      <p className="welcome_message">Design. Create. Innovate.</p>
    </div>

    <div id="waterHolder" />

    <ThreeContainerHome />
    <button className="arrow" onClick={() => props.changePage()}>
      Go to about page view redux
    </button>
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/about'),
    },
    dispatch
  );

Home.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Home);
