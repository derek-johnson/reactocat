import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ThreeContainerContact from '../headerContact/ThreeContainer';

const Contact = props => (
  <div>
    <div className="contact_container">
      <h1 className="contact">Contact</h1>
      <hr className="hr_small_black" />
      <p className="contact_message">Welcome to our contact page!</p>
    </div>
    <ThreeContainerContact />
    <button className="arrow" onClick={() => props.changePage()}>
      Go to home page view redux
    </button>
  </div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/'),
    },
    dispatch
  );

Contact.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Contact);
