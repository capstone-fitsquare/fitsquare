import React from "react"
import MacroPieChart from "./MacroPieChart"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const MacroPieChartContainer = (props) => {

  const { macroGoal } = props

  return macroGoal ? (
    <div style = {{
      height: '200px',
      width: '200px'
    }}>
      <MacroPieChart protein={macroGoal.protein} carbs={macroGoal.carbs} fat={macroGoal.fat} />
    </div>
  ) : null
}

const mapState = state => {
  return {
    macroGoal: state.macroGoals[0] // filter based on userId
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(MacroPieChartContainer)
