import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { addActivityLevel } from '../../store'
import {withRouter, Link} from 'react-router-dom'

// 0 => BMR
// 1 => No exercise (desk job/sedentary)
// 2 => 3 times/week
// 3 => 4 times/week
// 4 => 5 times/week
// 5 => 6 times/week
// 6 => 5 times/week (*intense)
// 7 => Every day
// 8 => Every day (*intense) or twice daily
// 9 => Daily exercise + physical job

const options = [
  { key: 1, text: 'No exercise (desk job/sedentary)', value: 1 },
  { key: 2, text: '3 times/week', value: 2 },
  { key: 3, text: '4 times/week', value: 3 },
  { key: 4, text: '5 times/week', value: 4 },
  { key: 5, text: '6 times/week', value: 5 },
  { key: 7, text: 'Every day', value: 7 },
  { key: 8, text: 'Twice daily', value: 8 },
  { key: 9, text: 'Daily exercise + physical job', value: 9 },
]

class ActivityLevel extends Component {

  constructor() {
    super()
    this.state = {
      activityLevel: ''
    }
    this.handleOption = this.handleOption.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOption (e, result) {
    const { name, value } = result

    this.setState({
      [name]: value
    })
  }

  handleSubmit (e) {
    const { addActivityLevel, history, transition } = this.props
    e.preventDefault()
    addActivityLevel(this.state.activityLevel)
    // history.push('/analyze-biometrics')
    transition('analyzeBiometricsText', 'activityLevelText', 'activityLevel')
  }

  render() {

    console.log('this.state', this.state)

    return (
      <div style={container}>
        <div style={header}>
          <p>Indicate your level of activity...</p>
        </div>
        <Form onSubmit={this.handleSubmit} style={formContainer}>
          <Form.Field fluid control={Select} name="activityLevel" value={this.state.activityLevel} options={options} placeholder='Activity level' onChange={this.handleOption} />
          <Form.Field style={button} control={Button}>Submit</Form.Field>
        </Form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    introProfile: state.introProfile
  }
}
const mapDispatch = dispatch => {
  return bindActionCreators({
    addActivityLevel,
  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(ActivityLevel))

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    margin: '2em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 0 2.5em'
  },
  button: {
    margin: '1em',
  }
}

const { container, header, formContainer, button } = styles
