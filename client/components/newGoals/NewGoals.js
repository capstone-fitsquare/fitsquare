import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { MacroGoalForm, MicroGoalForm }
 from '../../components'
import Piechart from '../visualizations/PieChart'

class NewGoals extends Component {

  render() {
    return (
      <svg height='1000px' width='1000px'>
      <Piechart x={200} y={200} outerRadius={100} innerRadius={50}
      data={[{value: 150, label: 'Fat'},
              {value: 100, label: 'Protein'},
              {value: 200, label: 'Carbs'}]} />
      </svg>
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
