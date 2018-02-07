import React from "react"
import PieChart from "react-svg-piechart"


const MacroPieChart = (props) => {

  const { protein, carbs, fat } = props

  const data = [
    {title: "Protein", value: protein, color: "#00FFD2"},
    {title: "Carbs", value: carbs, color: "#FDF700"},
    {title: "Fat", value: fat, color: "#FF9000"},
  ]

  return (
    <PieChart
      data={data}
      // If you need expand on hover (or touch) effect
      expandOnHover
      // If you need custom behavior when sector is hovered (or touched)
      onSectorHover={(d, i, e) => {
        if (d) {
          console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
        } else {
          console.log("Mouse leave - Index:", i, "Event:", e)
        }
      }}
    />
  )
}


export default MacroPieChart
