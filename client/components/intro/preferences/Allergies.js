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
            <Form.Field label='Dairy-Free' name='Dairy-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Egg-Free' name='Egg-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Gluten-Free'name='Gluten-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Peanut-Free' name='Peanut-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Seafood-Free' name='Seafood-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Sesame-Free' name='Sesame-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Soy-Free' name='Soy-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Sulfite-Free' name='Sulfite-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Tree Nut-Free' name='Tree Nut-Free' control='input' type='checkbox' onChange={this.handleChecked} />
            <Form.Field label='Wheat-Free' name='Wheat-Free' control='input' type='checkbox' onChange={this.handleChecked} />
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
