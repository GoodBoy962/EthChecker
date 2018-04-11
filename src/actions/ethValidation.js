import { isAddress } from '../lib/ethereum';

import {
  ETHEREUM_ADDRESS_CHECK,
  ETHEREUM_ADDRESS_CHECK_CLEAR
} from '../constants/action';

const isValid = address => {

  return dispatch => {

    dispatch({
      type: ETHEREUM_ADDRESS_CHECK,
      valid: isAddress(address)
    });

  };

};

const clear = () => {

  return dispatch => {

    dispatch({
      type: ETHEREUM_ADDRESS_CHECK_CLEAR
    })

  }

};

export {
  isValid,
  clear
};