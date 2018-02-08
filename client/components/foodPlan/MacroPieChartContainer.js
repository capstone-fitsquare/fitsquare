import React from "react"
import MacroPieChart from "./MacroPieChart"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const MacroPieChartContainer = (props) => {

  const { protein, carbs, fat } = props

  return (
    <div style = {{
      height: '200px',
      width: '200px',
      margin: '2em 4em 2em 2em'
    }}>
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
