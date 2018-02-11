import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select, Checkbox } from 'semantic-ui-react'
import store, { addAllergies, searchByAllergy, syncLocalStorage } from '../../../store'
import { withRouter, Link } from 'react-router-dom'
import { MyCheckbox } from '../../../components'

const allergies = [
  { label: 'Dairy-Free', name: 'dairyFree' },
  { label: 'Egg-Free', name: 'eggFree' },
  { label: 'Gluten-Free', name: 'glutenFree' },
  { label: 'Peanut-Free', name: 'peanutFree' },
  { label: 'Seafood-Free', name: 'seafoodFree' },
  { label: 'Sesame-Free', name: 'sesameFree' },
  { label: 'Soy-Free', name: 'soyFree' },
  { label: 'Sulfite-Free', name: 'sulfiteFree' },
  { label: 'Tree Nut-Free', name: 'treeNutFree' },
  { label: 'Wheat-Free', name: 'wheatFree' }
]

class Allergies extends Component {

  constructor() {
    super()
    this.state = {
      dairyFree: false,
      eggFree: false,
      glutenFree: false,
      peanutFree: false,
      seafoodFree: false,
      sesameFree: false,
      soyFree: false,
      sulfiteFree: false,
      treeNutFree: false,
      wheatFree: false
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
    const state = {...this.state}
    const { addAllergies, searchByAllergy, transition } = this.props

    addAllergies({...this.state})

    const stringArr = stateToStringArr(allergies, {...this.state})
    stringArr.forEach(allergy => searchByAllergy(allergy))
    transition('generateFoodPlanText', 'allergiesText', 'allergies')
  }

  render() {

    console.log('this.state', this.state)

    return (
      <Form onSubmit={this.handleSubmit} style={container}>
        <div style={header}>
          <h4>Food allergies?</h4>
        </div>
        <div style={prefContainer}>
          <div style={preferences}>
            {allergies.map(item =>
              <Checkbox key={item.name} label={item.label} name={item.name} checked={this.state[name]} onChange={this.handleChecked} />
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
    addAllergies, searchByAllergy
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Allergies)

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
