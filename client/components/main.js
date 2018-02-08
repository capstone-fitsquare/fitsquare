import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import { logout } from '../store';
import Navbar from './Navbar'
import './styles.css';
import Home from './Home'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = props => {
  const { children, handleClick, isLoggedIn } = props;

  return (
    <div>
      <Navbar />
      {children}
    </div>
    // <Container>
    //   <header>
    //     <h1>fitSquare</h1>
    //   </header>
    //   {isLoggedIn ? (
    //     <Menu stackable>
    //       {/* The navbar will show these links after you log in */}
    //       <Menu.Item>
    //         <Link to="/home">Home</Link>
    //       </Menu.Item>
    //       <Menu.Item>
    //         <a href="#" onClick={handleClick}>
    //           Logout
    //         </a>
    //       </Menu.Item>
    //     </Menu>
    //   ) : (
    //     <Menu stackable>
    //       {/* The navbar will show these links before you log in */}
    //       <Menu.Item>
    //         <Link to="/login">Login</Link>
    //       </Menu.Item>
    //       <Menu.Item>
    //         <Link to="/signup">Sign Up</Link>
    //       </Menu.Item>
    //     </Menu>
      // )}
      // {children}
    // </Container>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main));

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
