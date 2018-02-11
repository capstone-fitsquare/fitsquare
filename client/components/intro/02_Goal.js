import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { addGoalType } from '../../store'
import { Button } from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom'

class Goal extends Component {

  render() {

    const { addGoalType, history, transition } = this.props

    return (
      <div id="goals-parent" style={container}>
        <div style={goal} onClick={() => {
            addGoalType('Lose fat')
            transition('gatherBiometricsText', 'gatherBiometrics', 'welcomeText', 'goal')
          }}
        >Lose fat</div>

        <div style={goal} onClick={() => {
            addGoalType('Build muscle')
            transition('gatherBiometricsText', 'gatherBiometrics', 'welcomeText', 'goal')
          }}
        >Build muscle</div>

        <div style={goal} onClick={() => {
            addGoalType('Maintain')
            transition('gatherBiometricsText', 'gatherBiometrics', 'welcomeText', 'goal')
          }}
        >Maintain</div>

      </div>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => {
  return bindActionCreators({
    addGoalType
  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(Goal))

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  goal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '8px solid #666',
    borderRadius: '50%',
    margin: '2em',
    height: '200px',
    width: '200px',
    fontSize: '24px',
    background: 'lightyellow',
    cursor: 'pointer'
  },

}

const { container, header, goal } = styles
