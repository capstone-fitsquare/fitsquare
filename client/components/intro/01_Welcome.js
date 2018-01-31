import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

class Welcome extends Component {

  render() {

    return (
      <div style={container}>

        <div style={fitsquare}>
          <p>fitsquare</p>
        </div>

        <div id="loginParent" style={loginContainer}>
          <div style={login}>
            <Link to="/login">Log In</Link>
          </div>
          <div style={login}>
            <Link to="#">Continue As Guest</Link>
          </div>
        </div>


      </div>
    )
  }
}

export default Welcome

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  fitsquare: {
    margin: '2em',
    display: 'flex',
    justifyContent: 'center'
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2em'
  },
  login: {
    padding: '2em',
    margin: '2em',
    border: '1px solid black',
    borderRadius: '3px'
  },

}

const { container, fitsquare, loginContainer, login } = styles
