import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select, Checkbox } from 'semantic-ui-react'
import store, { addCuisines, syncLocalStorage } from '../../../store'
import { withRouter, Link } from 'react-router-dom'
import { MyCheckbox } from '../../../components'

const cuisines = [
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

class Cuisines extends Component {

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
    this.props.addAllergy({...this.state})
  }

  render() {

    console.log('this.state', this.state)

    return (
      <Form onSubmit={this.handleSubmit} style={container}>
        <div style={header}>
          <p>Indicate any food Cuisines</p>
        </div>
        <div>
          {cuisines.map(allergy =>
            <Checkbox key={allergy.name} label={allergy.label} name={allergy.name} checked={this.state[name]} onChange={this.handleChecked} />
          )}
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => {
  return bindActionCreators({
    addCuisines,
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Cuisines)

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
}

const { container, header } = styles
