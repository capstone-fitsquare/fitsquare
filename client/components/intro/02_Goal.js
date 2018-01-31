import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { addGoalType } from '../../store'

class Goal extends Component {

  render() {

    return (
      <div style={container}>

        <div style={header}>
          <p>What do you hope to achieve...</p>
        </div>

        <div id="goalsParent">

          <div style={goal}>
            <p>Lose fat</p>
          </div>

          <div style={goal}>
            <p>Build muscle</p>
          </div>

          <div style={goal}>
            <p>Maintain</p>
          </div>

        </div>

      </div>
    )
  }
}

export default Goal

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
