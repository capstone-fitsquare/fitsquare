import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { addVegOption } from '../../store'

class GatherPreferences extends Component {

  constructor () {
    super()
    this.state = {
      vegOption: '',
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
    this.props.addVegOption(this.state.vegOption)
  }

  render() {

    return (
      <div style={container}>
        <div style={header}>
          <p>...Gathering Preferences...</p>
        </div>
        <Form onSubmit={this.handleSubmit} style={preferencesParent}>
          <Form.Group inline>
            <label>Vegetarian?</label>
            <Form.Field control={Radio} name="vegOption" label='Yes' value='yes' checked={this.state.vegOption === 'yes'} onChange={this.handleChange} />
            <Form.Field control={Radio} name="vegOption" label='No' value='no' checked={this.state.vegOption === 'no'} onChange={this.handleChange} />
          </Form.Group>
          <Form.Field control={Input} label='Custom Preferences' placeholder='Custom Preferences' />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => {
  return bindActionCreators({
    addVegOption
  }, dispatch)
}

export default connect(mapState, mapDispatch)(GatherPreferences)

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
