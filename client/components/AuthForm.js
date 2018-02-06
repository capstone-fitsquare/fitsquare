import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';
import { Input, Button, Grid, Segment } from 'semantic-ui-react';

/**
 * COMPONENT
 */

const styles = {
  label: {
    textAlign: 'left',
    margin: '15px',
  },
  signInWithGoogle: {
    color: 'white',
  },
};

const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="login-form">
      <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Column>
          <form size="large" onSubmit={handleSubmit} name={name}>
            <Segment stacked>
              <label style={styles.label} htmlFor="email">
                <small>Email</small>
              </label>
              <Input fluid name="email" placeholder="E-mail address" icon="user" iconPosition="left" type="text" />

              <label style={styles.label} htmlFor="password">
                <small>Password</small>
              </label>
              <Input fluid name="password" icon="lock" iconPosition="left" type="password" placeholder="Password" />

              <Button type="submit">{displayName}</Button>

              {error && error.response && <div> {error.response.data} </div>}
              <Button color="google plus">
                <a style={styles.signInWithGoogle} href="/auth/google">
                  {displayName} with Google
                </a>
              </Button>
            </Segment>
          </form>
        </Grid.Column>
      </Grid>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  };
};

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
