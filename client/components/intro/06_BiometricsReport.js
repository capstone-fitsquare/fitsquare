import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import {withRouter, Link} from 'react-router-dom'
import { postMacroGoal } from '../../store'

class BiometricsReport extends Component {

  render() {

    const { goalType, calories, protein, carbs, fat } = this.props.introProfile

    return (
      <div style={container}>
        <div style={reportContainer}>
          <div style={caloriesStyle}>
            <p>Calories: {calories}</p>
          </div>
          <div style={macrosContainer}>
            <div style={proteinStyle}>
              <label>Protein</label>
              <p>{protein}g</p>
            </div>
            <div style={carbsStyle}>
              <label>Carbs</label>
              <p>{carbs}g</p>
            </div>
            <div style={fatStyle}>
              <label>Fat</label>
              <p>{fat}g</p>
            </div>
          </div>
        </div>
        <Button onClick={() => {
            this.props.transition('cuisinesText', 'cuisines', 'biometricsReportText', 'biometricsReport')
            this.props.postMacroGoal({
              name: goalType,
              calories,
              protein,
              carbs,
              fat
            })
          }}
          style={button}>Accept</Button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    introProfile: state.introProfile
  }
}

const mapDispatch = dispatch => {
  return bindActionCreators({
    postMacroGoal
  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(BiometricsReport))

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: '2em 4em',
    display: 'flex',
    justifyContent: 'center',
    background: 'lightgreen',
    border: '1px solid black',
    borderRadius: '3px',
    padding: '.5em 1.5em'
  },
  reportContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em',
    margin: '1em 6em',
  },
  caloriesStyle: {
    padding: '1em 2em',
    background: '#e3bcff',
    border: '8px solid #a93bf7',
    borderRadius: '30px',
    fontSize: '24px',
  },
  proteinStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '8px solid #00ffd2',
    borderRadius: '50%',
    margin: '2em',
    height: '200px',
    width: '200px',
    fontSize: '24px',
    background: '#a3ffee',
    cursor: 'pointer',
    flexDirection: 'column'
  },
  fatStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '8px solid #ff9000',
    borderRadius: '50%',
    margin: '2em',
    height: '200px',
    width: '200px',
    fontSize: '24px',
    background: '#ffd6a5',
    cursor: 'pointer',
    flexDirection: 'column'
  },
  carbsStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '8px solid #efe700',
    borderRadius: '50%',
    margin: '2em',
    height: '200px',
    width: '200px',
    fontSize: '24px',
    background: '#fffcad',
    cursor: 'pointer',
    flexDirection: 'column'
  },
  macrosContainer: {
    display: 'flex',
  },
  button: {
    margin: 'auto'
  }
}

const { container, header, reportContainer, caloriesStyle, proteinStyle, carbsStyle, fatStyle, macrosContainer, button } = styles
