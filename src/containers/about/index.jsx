import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ThreeContainerAbout from '../headerAbout/ThreeContainer';

const About = props => (
  <div>
    <div className="about_container">
      <h1 className="about">About</h1>
      <hr className="hr_small" />
      <p className="about_message">Welcome to our about page!</p>
    </div>
    <ThreeContainerAbout />
    <button className="arrow" onClick={() => props.changePage()}>
      Go to contact page view redux
    </button>
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/contact'),
    },
    dispatch
  );

About.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(About);
