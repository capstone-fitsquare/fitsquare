import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

class GatherPreferences extends Component {

  constructor () {
    super()
    this.state = {
      vegetarian: '',
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
    const vegetarian = this.state.vegetarian
    // this.props.postBiometrics(biometrics)
  }

  render() {

    return (
      <div style={container}>
        <div style={header}>
          <p>...Gathering Preferences...</p>
        </div>
        <Form style={preferencesParent}>
          <Form.Group inline>
            <label>Vegetarian?</label>
            <Form.Field control={Radio} label='Yes' value='yes' checked={this.state.vegetarian === 'yes'} onChange={this.handleChange} />
            <Form.Field control={Radio} label='No' value='no' checked={this.state.vegetarian === 'yes'} onChange={this.handleChange} />
          </Form.Group>
          <Form.Field control={Input} label='Custom Preferences' placeholder='Custom Preferences' />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </div>
    )
  }
}

export default GatherPreferences

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
  preferencesParent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    margin: '1em',
    alignItems: 'center'
  },
}

const { container, header, preferencesParent } = styles
