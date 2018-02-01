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
      <div style={container}>

        <div style={header}>
          <p>What do you hope to achieve...</p>
        </div>
        <div id="goalsParent">
          <div style={goal} onClick={() => addGoalType('Lose fat')}>
            <p>Lose fat</p>
          </div>
          <div style={goal} onClick={() => addGoalType('Build muscle')}>
            <p>Build muscle</p>
          </div>
          <div style={goal} onClick={() => addGoalType('Maintain')}>
            <p>Maintain</p>
          </div>
        </div>
        <Button onClick={() => transition('goal', 'gatherBiometrics')}>Confirm</Button>
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
    flexDirection: 'column'
  },
  header: {
    margin: '2em 8em 0em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
  goal: {
    padding: '1em',
    border: '1px solid black',
    borderRadius: '3px',
    margin: '2em 3em'
  },

}

const { container, header, goal } = styles
