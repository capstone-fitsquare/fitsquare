import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'


class BiometricsReport extends Component {

  render() {

    const { calories, protein, carbs, fat } = this.props

    return (
      <div style={container}>
        <div style={header}>
          <p>Biometrics Report</p>
        </div>
        <div style={reportContainer}>
          <div style={calories}>
            <p>Calories: {calories}</p>
          </div>
          <div style={macrosContainer}>
            <div style={macros}>
              <label>Protein</label>
              <p>{protein}g</p>
            </div>
            <div style={macros}>
              <label>Carbs</label>
              <p>{carbs}g</p>
            </div>
            <div style={macros}>
              <label>Fat</label>
              <p>{fat}g</p>
            </div>
          </div>
        </div>
        <button style={button}>Accept</button>
      </div>
    )
  }
}

export default BiometricsReport

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
    margin: '1em'
  },
  calories: {
    padding: '1em 2em',
    background: 'lightyellow',
    border: '1px solid black',
    borderRadius: '3px',
  },
  macros: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2em 2.5em',
    margin: '3em',
    background: 'lavender',
    border: '1px solid black',
    borderRadius: '3px',
    width: '60px'
  },
  macrosContainer: {
    display: 'flex',
  },
  button: {
    margin: 'auto'
  }
}

const { container, header, reportContainer, calories, macros, macrosContainer, button } = styles
