import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ThreeContainerNotFound from './headerNotFound/ThreeContainer';

const NotFound = props => (
  <div>
    <div className="notFound_container">
      <h1 className="notFound"> Error 404</h1>
      <hr className="hr_small" />
      <p className="notFound_message">Oops, something went wrong</p>
    </div>
    <ThreeContainerNotFound />
    <button className="arrow_notFound" onClick={() => props.changePage()}>
      Head back home
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

NotFound.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NotFound);
