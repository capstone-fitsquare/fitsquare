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
      <div id="percentage-parent">
        <div style={proteinPercent}>{proteinPercentage}%</div>
        <div style={carbsPercent}>{carbsPercentage}%</div>
        <div style={fatPercent}>{fatPercentage}%</div>
      </div>
      <MacroPieChart protein={protein} carbs={carbs} fat={fat} />
      <div id="key" style={key}>
        <div style={macro}>
          <div style={proteinStyle} />
          <div>Protein</div>
        </div>
        <div style={macro}>
          <div style={carbsStyle} />
          <div>Carbs</div>
        </div>
        <div style={macro}>
          <div style={fatStyle} />
          <div>Fat</div>
        </div>
      </div>
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
  },
  key: {
    position: 'absolute',
    top: '50vh',
    right: '8vw',
  },
  macro: {
    display: 'flex',
    alignItems: 'center',
    width: '70px'
  },
  proteinStyle: {
    width: '8px',
    height: '8px',
    background: '#00ffd2',
    marginRight: '1em'
  },
  carbsStyle: {
    width: '8px',
    height: '8px',
    background: '#fdf700',
    marginRight: '1em'
  },
  fatStyle: {
    width: '8px',
    height: '8px',
    background: '#ff9000',
    marginRight: '1em'
  }
}

const { container, proteinPercent, carbsPercent, fatPercent, key, macro, proteinStyle, carbsStyle, fatStyle } = styles
