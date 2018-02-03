import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select } from 'semantic-ui-react'
import { addTaste } from '../../../store'
import {withRouter, Link} from 'react-router-dom'

class Tastes extends Component {

  constructor() {
    super()
    this.state = {
      tastes: {
        salty: false,
        sweet: false,
        bitter: false,
        savory: false,
        sour: false,
        spicy: false
      }
    }
  }

  handleSubmit() {

  }

  render() {

    return (
      <div style={container}>
        <Form onSubmit={this.handleSubmit} style={biometricsParent}>
        <Form.Group grouped>
          <label>Tastes</label>
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
    addTaste,
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Tastes)

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
