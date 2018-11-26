import React, { Component } from 'react';
import {
  withStyles,
  Button,
  Card,
  CardActions,
  CardActionArea,
  Typography,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import {
  Form
} from 'informed';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import TextField from '../../components/text-field/TextField';
import { validateRequired, validateEmail, validateEqualPasswords, combineValidators } from '../../helpers/validators';
import { login, signup, setCurrentUser } from '../../actions/auth';

import styles from './styles';
import baseStyles from '../../styles';

class Auth extends Component {

  state = {};

  static getDerivedStateFromProps({ error }) {
    console.log(error && error.response);
    return null;
  }

  formSubmit = (formState) => () => {
    this.props.login(formState.values);
  }

  render() {
    const { classes, formType } = this.props;
    return (
      <Form id="auth-form" onSubmit={this.formSubmit} className={classes.form}>
        {({ formState }) => (
          <Card className={classes.card}>
            <CardActionArea>
              <div style={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  alt="Auth Background"
                  className={classes.media}
                  height="140"
                  image={`/img/${formType}-bg.jpg`}
                />
                <Typography
                  className={classes.title}
                  gutterBottom variant="h2">
                  { formType }
                </Typography>
              </div>
            </CardActionArea>
            <CardContent>
              <TextField
                field="email"
                label="Email"
                type="email"
                validate={combineValidators([validateRequired, validateEmail])}
                validateOnBlur
              />
              <TextField
                field="password"
                label="Password"
                type="password"
                validate={combineValidators([validateRequired, validateEqualPasswords])}
                validateOnBlur
                notify={formType === 'Sign Up' && ['confirmPassword']}
              />
              {formType === 'Sign Up' &&
                <TextField
                  field="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  validate={combineValidators([validateRequired, validateEqualPasswords])}
                  validateOnBlur
                  notify={['password']}
                />
              }
              {this.props.error &&
                <Typography color="error">
                  Oops! Something went wrong
                </Typography>
              }
            </CardContent>
            <CardActions className={classes.actions}>
              <Button
                disabled={formState.pristine || formState.invalid}
                onClick={this.formSubmit(formState)}
                size="small"
                color="primary">
                { formType }
              </Button>
              <Link
                className={classes.link}
                to={formType === 'Login' ? '/signup' : '/login'}>
                <Button size="small" color="primary">
                  { formType === 'Login' ? 'Sign Up' : 'Login' }
                </Button>
              </Link>
            </CardActions>
          </Card>
        )}
      </Form>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
  formType: PropTypes.string.isRequired
};

const mapStateToProps = ({ auth }) => ({
  data: auth.data,
  error: auth.error,
  currentUser: auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data)),
  signup: (data) => dispatch(signup(data)),
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Object.assign(baseStyles, styles))(Auth)
);