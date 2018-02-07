import React from "react"
import MacroPieChart from "./MacroPieChart"

const MacroPieChartContainer = (props) => {

  const macros = {
    protein: 200,
    carbs: 300,
    fat: 80
  }

  return (
    <div style = {{
      height: '200px',
      width: '200px'
    }}>
      <MacroPieChart protein={macros.protein} carbs={macros.carbs} fat={macros.fat} />
    </div>
  )
}

export default MacroPieChartContainer
