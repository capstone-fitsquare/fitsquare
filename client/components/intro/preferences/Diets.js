import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select, Checkbox } from 'semantic-ui-react'
import store, { addDiets, searchByDiet, syncLocalStorage } from '../../../store'
import { withRouter, Link } from 'react-router-dom'
import { MyCheckbox } from '../../../components'

const diets = [
  { label: 'Lacto vegetarian', name: 'lactoVegetarian' },
  { label: 'Ovo vegetarian', name: 'ovoVegetarian' },
  { label: 'Pescetarian', name: 'pescetarian' },
  { label: 'Vegan', name: 'vegan' },
  { label: 'Vegetarian', name: 'vegetarian' },
  { label: 'Paleo', name: 'paleo' }
]

class Diets extends Component {

  constructor() {
    super()
    this.state = {
      lactoVegetarian: false,
      ovoVegetarian: false,
      pescetarian: false,
      vegan: false,
      vegetarian: false,
      paleo: false,
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
    const { addDiets, searchByDiet, togglePreference } = this.props
    addDiets({...this.state})
    const stringArr = stateToStringArr(diets, {...this.state})
    stringArr.forEach(diet => searchByDiet(diet))
    togglePreference('diets', 'cuisines')
  }

  render() {

    console.log('this.state', this.state)

    return (
      <Form onSubmit={this.handleSubmit} style={container}>
        <div style={header}>
          <h4>Special diet restrictions?</h4>
        </div>
        <div style={prefContainer}>
          <div style={preferences}>
            {diets.map(item =>
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
    addDiets, searchByDiet
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Diets)

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
