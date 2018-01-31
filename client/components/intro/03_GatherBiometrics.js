import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select } from 'semantic-ui-react'
import { addHeightFeet, addHeightInches, addWeight, addAge, addGender } from '../../store'


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
    this.handleSelectGender = this.handleSelectGender.bind(this)
  }

  handleInput (e) {
    const { name, value } = e.target

    console.log('name', name)
    console.log('value', value)

    this.setState({
      [name]: value
    })
  }


  // <Checkbox checked={terms.value} onCheck={(e, checked) => terms.onChange(checked)} />

  handleSelectGender (e, result) {
    const { name, value } = result

    console.log('name', name)
    console.log('value', value)

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addHeightFeet(this.state.heightFeet)
    this.props.addHeightInches(this.state.heightInches)
    this.props.addWeight(this.state.weight)
    this.props.addAge(this.state.age)
    this.props.addGender(this.state.gender)
  }

  render() {

    console.log('this.state', this.state)

    return (
      <div style={container}>
        <div style={header}>
          <p>...Gathering Biometrics...</p>
        </div>
        <Form onSubmit={this.handleSubmit} style={biometricsParent}>
          {/* <Form.Group inline>
            <label>Height</label>
            <Form.Field fluid control={Select} name="heightFeet" value={this.state.heightFeet} options={ftOptions} placeholder='ft' onChange={this.handleSelectHeight} />
            <Form.Field fluid control={Select} name="heightInches" value={this.state.heightInches} options={inOptions} placeholder='in' onChange={this.handleSelectHeight} />
          </Form.Group> */}
          <Form.Group inline>
            <label>Height</label>
            <Form.Field control={Input} name="heightFeet" value={this.state.heightFeet} placeholder='ft' onChange={this.handleInput} />
            <Form.Field control={Input} name="heightInches" value={this.state.heightInches} placeholder='in' onChange={this.handleInput} />
          </Form.Group>
          <Form.Field control={Input} name="weight" value={this.state.weight} label='Weight' placeholder='lbs' onChange={this.handleInput} />
          <Form.Field control={Input} name="age" value={this.state.age} label='Age' placeholder='years' onChange={this.handleInput} />
          {/* <Form.Field control={Select} label='Age' options={options} placeholder='Age' /> */}
          <Form.Group inline>
            <label>Gender</label>
            <Form.Field control={Radio} name="gender" label='M' value='male' checked={this.state.gender === 'male'} onChange={this.handleSelectGender} />
            <Form.Field control={Radio} name="gender" label='F' value='female' checked={this.state.gender === 'female'} onChange={this.handleSelectGender} />
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

export default connect(mapState, mapDispatch)(GatherBiometrics)

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
