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
    transition('gatherBiometrics', 'activityLevel')
  }

  render() {

    console.log('this.state', this.state)

    return (
      <div style={container}>
        <div style={header}>
          <p>...Gathering Biometrics...</p>
        </div>
        <Form onSubmit={this.handleSubmit} style={biometricsParent}>
          <Form.Group inline>
            <label>Height</label>
            <Form.Field control={Input} name="heightFeet" value={this.state.heightFeet} placeholder='ft' onChange={this.handleInput} />
            <Form.Field control={Input} name="heightInches" value={this.state.heightInches} placeholder='in' onChange={this.handleInput} />
          </Form.Group>
          <Form.Field control={Input} name="weight" value={this.state.weight} label='Weight' placeholder='lbs' onChange={this.handleInput} />
          <Form.Field control={Input} name="age" value={this.state.age} label='Age' placeholder='yrs' onChange={this.handleInput} />
          <Form.Group inline>
            <label>Gender</label>
            <Form.Field control={Radio} name="gender" label='M' value='male' checked={this.state.gender === 'male'} onChange={this.handleOption} />
            <Form.Field control={Radio} name="gender" label='F' value='female' checked={this.state.gender === 'female'} onChange={this.handleOption} />
          </Form.Group>
          <Form.Field control={Button}>Submit</Form.Field>
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
    flexDirection: 'column'
  },
  header: {
    margin: '2em 8em 0em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
  biometricsParent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    margin: '1em',
    alignItems: 'center'
  },
}

const { container, header, biometricsParent } = styles
