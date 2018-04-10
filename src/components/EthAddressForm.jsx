import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui';
import { compose } from '../lib/util';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogTitle,
} from 'material-ui/Dialog';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
  menu: {
    width: 200,
  },
});

class EthAddressForm extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    valid: PropTypes.bool
  };

  state = {
    address: '',
    open: false
  };

  onChangeAddr = e => {
    const {value} = e.target;
    this.setState({
      'address': value
    });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.clear();
  };

  render() {
    const {classes, onSubmit, valid, pended} = this.props;
    const {address} = this.state;
    const open = valid && !!address && pended;
    return (
      <div>
        {
          !valid ?
            <TextField
              error
              label='Невалидный адрес'
              defaultValue={ address }
              onChange={ this.onChangeAddr }
              className={ classes.textField }
              margin='normal'
            />
            :
            <TextField
              onChange={ this.onChangeAddr }
              className={ classes.textField }
              margin='normal'
            />
        }
        <br/>
        <Dialog
          open={ open }
          onClose={ this.handleClose }
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Верно!</DialogTitle>
          <DialogActions>
            <Button onClick={ this.handleClose } color="primary">
              закрыть
            </Button>
          </DialogActions>
        </Dialog>
        <Button variant="raised"
                component="span"
                className={ classes.button }
                onClick={ e => {
                  e.preventDefault();
                  (!!onSubmit) && onSubmit(this.state.address);
                } }>
          Далее
        </Button>
      </div>
    )
  }
}

export default compose(
  withStyles(styles)
)(EthAddressForm)