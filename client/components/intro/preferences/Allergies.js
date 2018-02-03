import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select } from 'semantic-ui-react'
import store, { addAllergy, syncLocalStorage } from '../../../store'
import {withRouter, Link} from 'react-router-dom'

class Allergies extends Component {

  handleChecked(e, result) {
    const { name, value } = result
    if (value) this.props.addAllergy(name)
  }

  handleSubmit(e) {
    e.preventDefault()
    syncLocalStorage(store.getState())
  }

  render() {

    return (
      <div style={container}>
        <Form onSubmit={this.handleSubmit} style={formParent}>
          <Form.Group grouped>
            <label>Do you have any food allergies?</label>
            <Form.Field label='Salty' control='input' type='checkbox' />
            <Form.Field label='Sweet' control='input' type='checkbox' />
            <Form.Field label='Bitter' control='input' type='checkbox' />
            <Form.Field label='Savory' control='input' type='checkbox' />
            <Form.Field label='Sour' control='input' type='checkbox' />
            <Form.Field label='Spicy' control='input' type='checkbox' />
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
    addAllergy,
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Allergies)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  formParent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    margin: '1em',
    alignItems: 'center'
  },
}

const { container, formParent } = styles
