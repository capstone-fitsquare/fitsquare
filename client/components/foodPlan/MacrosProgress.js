import React, { Component } from 'react'
import Progress from 'react-progressbar'

class MacrosProgress extends Component {
  render () {
    return (
      <div>
        <h3>Protein</h3>
        <Progress completed={25} color='#00FFD2' />
        <h3>Carbs</h3>
        <Progress completed={75} color='#FDF700' />
        <h3>Fat</h3>
        <Progress completed={40} color='#FF9000' />
      </div>
    )
  }
}

export default MacrosProgress
