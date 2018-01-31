import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

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
    const biometrics = {...this.state}
    // this.props.postBiometrics(biometrics)
  }

  render() {

    return (
      <div style={container}>
        <div style={header}>
          <p>...Gathering Biometrics...</p>
        </div>
        <Form style={biometricsParent}>
            <Form.Field control={Input} label='Height' placeholder='Height' />
            <Form.Field control={Input} label='Weight' placeholder='Weight' />
            <Form.Field control={Input} label='Age' placeholder='Age' />
            {/* <Form.Field control={Select} label='Age' options={options} placeholder='Age' /> */}
            <Form.Group inline>
              <label>Gender</label>
              <Form.Field control={Radio} label='M' value='male' checked={this.state.gender === 'male'} onChange={this.handleChange} />
              <Form.Field control={Radio} label='F' value='female' checked={this.state.gender === 'female'} onChange={this.handleChange} />
            </Form.Group>
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </div>
    )
  }
}

export default GatherBiometrics

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
