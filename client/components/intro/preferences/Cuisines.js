import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select, Checkbox } from 'semantic-ui-react'
import store, { addCuisines, syncLocalStorage, searchByCuisine } from '../../../store'
import { withRouter, Link } from 'react-router-dom'
import { MyCheckbox } from '../../../components'

const cuisines = [
  { label: 'American', name: 'american' },
  { label: 'Asian', name: 'asian' },
  { label: 'Barbecue', name: 'barbecue' },
  { label: 'Chinese', name: 'chinese' },
  { label: 'English', name: 'english' },
  { label: 'French', name: 'french' },
  { label: 'German', name: 'german' },
  { label: 'Indian', name: 'indian' },
  { label: 'Italian', name: 'italian' },
  { label: 'Japanese', name: 'japanese' },
  { label: 'Mediterranean', name: 'mediterranean' },
  { label: 'Mexican', name: 'mexican' },
  { label: 'Southern & Soul Food', name: 'southernSoul' },
  { label: 'Thai', name: 'thai' },
]

class Cuisines extends Component {

  constructor() {
    super()
    this.state = {
      american: false,
      asian: false,
      barbecue: false,
      chinese: false,
      english: false,
      french: false,
      german: false,
      indian: false,
      italian: false,
      japanese: false,
      mediterranean: false,
      mexican: false,
      southernSoul: false,
      thai: false,
    }
    this.handleChecked = this.handleChecked.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChecked(e, result) {
    const { name, checked } = result
    this.setState({
      [name]: checked
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addCuisines, searchByCuisine, transition } = this.props
    addCuisines({...this.state})
    const stringArr = stateToStringArr(cuisines, {...this.state})
    stringArr.forEach(cuisine => searchByCuisine(cuisine))
    transition('dietsText', 'cuisinesText', 'cuisines')
  }

  render() {

    console.log('this.state', this.state)

    return (
      <Form onSubmit={this.handleSubmit} style={container}>
        <div style={header}>
          <h4>Preferred cuisines?</h4>
        </div>
        <div style={prefContainer}>
          <div style={preferences}>
            {cuisines.map(allergy =>
              <Checkbox key={allergy.name} label={allergy.label} name={allergy.name} checked={this.state[name]} onChange={this.handleChecked} />
            )}
          </div>
        </div>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => {
  return bindActionCreators({
    addCuisines, searchByCuisine
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Cuisines)

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    margin: '2em 8em 0em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
  prefContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1em',
    padding: '1em'
  },
  preferences: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const { container, header, prefContainer, preferences } = styles

const stateToStringArr = (arr, state) => {
  const names = Object.keys(state).filter(item => state[item])
  let strings = []
  names.map(name => {
    for (var i = 0; i < arr.length; i++){
      if (arr[i].name === name) strings.push(arr[i].label)
    }
  })
  return strings
}
