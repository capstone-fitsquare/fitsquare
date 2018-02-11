import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select } from 'semantic-ui-react'
import { addHeightFeet, addHeightInches, addWeight, addAge, addGender } from '../../store'
import {withRouter, Link} from 'react-router-dom'


// const generateHeightOptions = (min, max) => {
//   let output = []
//   for (let i = min; i <= max; i++){
//     output.push({ key: i, text: `${i}`, value: i })
//   }
//   return output
// }

// const ftOptions = generateHeightOptions(3, 7)
// const inOptions = generateHeightOptions(0, 12)

class GatherBiometrics extends Component {

  constructor () {
    super()
    this.state = {
      weight: '',
      heightFeet: '',
      heightInches: '',
      gender: '',
      age: '',
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOption = this.handleOption.bind(this)
  }

  handleInput (e) {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleOption (e, result) {
    const { name, value } = result

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addHeightFeet, addHeightInches, addWeight, addAge, addGender, history, transition } = this.props
    const { heightFeet, heightInches, weight, age, gender } = this.state
    addHeightFeet(+heightFeet)
    addHeightInches(+heightInches)
    addWeight(+weight)
    addAge(+age)
    addGender(gender)
    // history.push('/activity-level')
    transition('activityLevelText', 'activityLevel', 'gatherBiometricsText', 'gatherBiometrics')
  }

  render() {

    console.log('this.state', this.state)

    return (
      <div style={container}>
        <Form onSubmit={this.handleSubmit} style={biometricsParent}>
          <div style={formCard}>
          <Form.Group inline>
            <label>Height</label>
            <Form.Field style={{width: '60px'}} control={Input} name="heightFeet" value={this.state.heightFeet} placeholder='ft' onChange={this.handleInput} />
            <Form.Field style={{width: '60px'}} control={Input} name="heightInches" value={this.state.heightInches} placeholder='in' onChange={this.handleInput} />
          </Form.Group>
          <Form.Field control={Input} name="weight" value={this.state.weight} label='Weight' placeholder='lbs' onChange={this.handleInput} />
          <Form.Field control={Input} name="age" value={this.state.age} label='Age' placeholder='yrs' onChange={this.handleInput} />
          <Form.Group inline>
            <label>Gender</label>
            <Form.Field control={Radio} name="gender" label='M' value='male' checked={this.state.gender === 'male'} onChange={this.handleOption} />
            <Form.Field control={Radio} name="gender" label='F' value='female' checked={this.state.gender === 'female'} onChange={this.handleOption} />
          </Form.Group>
        </div>
        <button style={button} type='submit'>Go!</button>
        </Form>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => {
  return bindActionCreators({
    addHeightFeet, addHeightInches, addWeight, addAge, addGender
  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(GatherBiometrics))

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    margin: '2em 8em 0em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
  biometricsParent: {
    display: 'flex',
    padding: '1em',
    margin: '1em',
    alignItems: 'flex-end'
  },
  formCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: '#e0b5ff',
    padding: '3em',
    borderRadius: '30px',
    border: '8px solid #a93bf7'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #666',
    borderRadius: '50%',
    margin: '2em',
    height: '48px',
    width: '48px',
    background: 'lightyellow',
    cursor: 'pointer'
  }
}

const { container, header, biometricsParent, formCard, button } = styles
