import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Welcome from './01_Welcome'
import Goal from './02_Goal'
import GatherBiometrics from './03_GatherBiometrics'
import AnalyzeBiometrics from './04_AnalyzeBiometrics'
import BiometricsReport from './05_BiometricsReport'
import GatherPreferences from './06_GatherPreferences'
import GenerateFoodPlan from './07_GenerateFoodPlan'

class IntroSequence extends Component {

  render() {

    return (
      <div style={container}>
        <Welcome />
        <hr style={hr}/>
        <Goal />
        <hr style={hr}/>
        <GatherBiometrics />
        <hr style={hr}/>
        <AnalyzeBiometrics />
        <hr style={hr}/>
        <BiometricsReport />
        <hr style={hr}/>
        <GatherPreferences />
        <hr style={hr}/>
        <GenerateFoodPlan />
        <hr style={hr}/>
      </div>
    )
  }
}

export default IntroSequence

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  hr: {
    width: '90%',
  }
}

const { container, hr } = styles
