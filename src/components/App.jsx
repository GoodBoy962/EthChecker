import React from 'react';

import { connect } from 'react-redux';
import { compose } from '../lib/util';
import { isValid, clear } from '../actions/ethValidation';

import EthAddressForm from '../components/EthAddressForm';

class App extends React.Component {

  render() {
    const {classes, valid, isValid, clear, pended} = this.props;
    return (
      <EthAddressForm classes={ classes }
                      onSubmit={ isValid }
                      clear = { clear }
                      valid={ valid }
                      pended={ pended }
      />
    );
  }
}

const mapStateToProps = state => ({
  valid: state.ethValidation.valid,
  pended: state.ethValidation.pended,
});

const mapDispatchToProps = dispatch => ({
  isValid: (address) => dispatch(isValid(address)),
  clear: () => dispatch(clear())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(App);
