import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

class Welcome extends Component {

  render() {

    const { history, transition } = this.props

    return (
      <div>
        <div style={welcome}>
          <div>Welcome to fitSquare!</div>
          <div>Click to get started</div>
        </div>
        <div style={button}>
          <div onClick={() => transition('welcome', 'goal')}>Go!</div>
        </div>
      </div>
    )
  }
}

export default Welcome

const styles = {
  welcomeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
    textAlign: 'center',
    margin: 'auto'
  },
  welcome: {
    padding: '2em',
    margin: '2em',
  },
  button: {
    padding: '2em',
    margin: '2em',
    boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
    borderRadius: '3px'
  }
}

const { welcomeContainer, welcome, button } = styles
