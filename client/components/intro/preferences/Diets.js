import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select, Checkbox } from 'semantic-ui-react'
import store, { addDiets, syncLocalStorage } from '../../../store'
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
    this.props.addDiets({...this.state})
  }

  render() {

    console.log('this.state', this.state)

    return (
      <Form onSubmit={this.handleSubmit} style={container}>
        <div style={header}>
          <p>Indicate any diet preferences</p>
        </div>
        <div>
          {diets.map(item =>
            <Checkbox key={item.name} label={item.label} name={item.name} checked={this.state[name]} onChange={this.handleChecked} />
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
    addDiets,
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Diets)

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
