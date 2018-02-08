import React from "react"
import MacroPieChart from "./MacroPieChart"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { isAbsolute } from "path";

const MacroPieChartContainer = (props) => {

  const { protein, carbs, fat } = props
  const total = protein + carbs + fat
  const proteinPercentage = Math.ceil((protein / total) * 100)
  const carbsPercentage = Math.ceil((carbs / total) * 100)
  const fatPercentage = Math.ceil((fat / total) * 100)

  return (
    <div style = {container}>
      <div id="piechartparent">
        <div style={proteinPercent}>{proteinPercentage}%</div>
        <div style={carbsPercent}>{carbsPercentage}%</div>
        <div style={fatPercent}>{fatPercentage}%</div>
      </div>
      <MacroPieChart protein={protein} carbs={carbs} fat={fat} />
    </div>
  )
}

// const mapState = state => {
//   return {
//     macroGoal: state.macroGoals[0] // filter based on userId
//   }
// }

// const mapDispatch = null

// export default connect(mapState, mapDispatch)(MacroPieChartContainer)

export default MacroPieChartContainer

const styles = {
  container: {
    height: '200px',
    width: '200px',
    margin: '2em 4em 2em 2em',
    fontWeight: 'bold'
  },
  proteinPercent: {
    position: 'absolute',
    top: '45px',
    right: '70px',
    textAlign: 'center',
    color: '#00dbb3',
  },
  carbsPercent: {
    position: 'absolute',
    top: '98px',
    right: '130px',
    textAlign: 'center',
    color: '#dbd000',
  },
  fatPercent: {
    position: 'absolute',
    top: '125px',
    right: '55px',
    textAlign: 'center',
    color: '#e27c00',
  }
}

const { container, proteinPercent, carbsPercent, fatPercent } = styles
