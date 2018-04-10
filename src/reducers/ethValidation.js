import {
  ReducerFactory,
  Assing
} from '../lib/util';

import {
  ETHEREUM_ADDRESS_CHECK,
  ETHEREUM_ADDRESS_CHECK_CLEAR
} from '../constants/action';

const DState = {
  valid: true,
  pended: false
};

const Actions = {

  [ETHEREUM_ADDRESS_CHECK]:
    (state, {valid}) =>
      Assing(state, {valid, pended: true}),

  [ETHEREUM_ADDRESS_CHECK_CLEAR]:
    state =>
      Assing(state, DState)

};

export default ReducerFactory(DState, Actions);