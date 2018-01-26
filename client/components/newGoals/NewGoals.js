import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { MacroGoalForm, MicroGoalForm } from '../../components'

class NewGoals extends Component {

  render() {
    return (
      <div style={formContainer}>
        <div style={macro}>
          <MacroGoalForm />
        </div>
        {/* <div style={micro}>
          <MicroGoalForm />
        </div> */}
      </div>
    )
  }
}

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    margin: '1em'
  },
  macro: {
    padding: '1em',
    margin: '1em'
  },
  micro: {
    padding: '1em',
    margin: '1em'
  }
}

const { formContainer, macro, micro } = styles

export default NewGoals
