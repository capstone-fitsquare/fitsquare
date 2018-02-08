import React from "react"
// import PieChart from "react-svg-piechart"
import PieChart from 'react-minimal-pie-chart'


const MacroPieChart = (props) => {

  const protein = Math.ceil(props.protein)
  const carbs = Math.ceil(props.carbs)
  const fat = Math.ceil(props.fat)

  console.log('protein', protein)
  console.log('carbs', carbs)
  console.log('fat', fat)

  // const data = [
  //   {title: "Protein", value: protein, color: "#00FFD2"},
  //   {title: "Carbs", value: carbs, color: "#FDF700"},
  //   {title: "Fat", value: fat, color: "#FF9000"},
  // ]

  const data = [
    {key: "Protein", value: protein, color: "#00FFD2"},
    {key: "Carbs", value: carbs, color: "#FDF700"},
    {key: "Fat", value: fat, color: "#FF9000"},
  ]

  return (
    <PieChart
      data={data}
      animate={true}
      // rounded={true}
      lineWidth={25}
      // If you need expand on hover (or touch) effect
      // expandOnHover
      // If you need custom behavior when sector is hovered (or touched)
      // onSectorHover={(d, i, e) => {
      //   if (d) {
      //     console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
      //   } else {
      //     console.log("Mouse leave - Index:", i, "Event:", e)
      //   }
      // }}
    />
  )
}


export default MacroPieChart
