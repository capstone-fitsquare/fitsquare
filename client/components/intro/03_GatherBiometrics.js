import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { addHeight, addWeight, addAge, addGender } from '../../store'

class GatherBiometrics extends Component {

  constructor () {
    super()
    this.state = {
      weight: '',
      height: '',
      gender: '',
      age: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addHeight(this.state.height)
    this.props.addWeight(this.state.weight)
    this.props.addAge(this.state.age)
    this.props.addGender(this.state.gender)
  }

  render() {

    return (
      <div style={container}>
        <div style={header}>
          <p>...Gathering Biometrics...</p>
        </div>
        <Form onSubmit={this.handleSubmit} style={biometricsParent}>
            <Form.Field control={Input} name="height" value={this.state.height} label='Height' placeholder='Height' onChange={this.handleChange} />
            <Form.Field control={Input} name="weight" value={this.state.weight} label='Weight' placeholder='Weight' onChange={this.handleChange} />
            <Form.Field control={Input} name="age" value={this.state.age} label='Age' placeholder='Age' onChange={this.handleChange} />
            {/* <Form.Field control={Select} label='Age' options={options} placeholder='Age' /> */}
            <Form.Group inline>
              <label>Gender</label>
              <Form.Field control={Radio} name="gender" label='M' value='male' checked={this.state.gender === 'male'} onChange={this.handleChange} />
              <Form.Field control={Radio} name="gender" label='F' value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} />
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
    addHeight, addWeight, addAge, addGender
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