import React, { Component, Fragment } from 'react';
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

  static getDerivedStateFromProps = (props) => {
    if (localStorage.token && props.data) {
      props.history.push('/');
    }
    return null;
  }

  loginUser = (formState) => () => {
    this.props.login(formState.values);
  }

  registerUser = (formState) => () => {
    this.props.register(formState.values);
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
                validate={formType === 'Sign Up' ?
                  combineValidators([validateRequired, validateEqualPasswords]) :
                  validateRequired
                }
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
                  {this.props.error.response.data ?
                    this.props.error.response.data.message
                  :
                    'Oops! Something went wrong'
                  }
                </Typography>
              }
            </CardContent>
            <CardActions className={classes.actions}>
              {formType === 'Login' ?
                <Fragment>
                  <Button
                    disabled={formState.pristine || formState.invalid}
                    onClick={this.loginUser(formState)}
                    size="small"
                    color="primary">
                    { formType }
                  </Button>
                  <Link
                    className={classes.link}
                    to={'/signup'}>
                    <Button size="small" color="primary">
                      Sign Up
                    </Button>
                  </Link>
                </Fragment>
              :
                <Fragment>
                  <Button
                    disabled={formState.pristine || formState.invalid}
                    onClick={this.registerUser(formState)}
                    size="small"
                    color="primary">
                    { formType }
                  </Button>
                  <Link
                    className={classes.link}
                    to={'/login'}>
                    <Button size="small" color="primary">
                      Login
                    </Button>
                  </Link>
                </Fragment>
              }
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

const mapStateToProps = ({ auth }) => auth;

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data)),
  register: (data) => dispatch(signup(data)),
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(Object.assign(baseStyles, styles))(Auth)
);